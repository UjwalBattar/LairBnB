class Listing < ApplicationRecord
  validates :title, :category, :description, presence: true
  validates :title, uniqueness: true
  geocoded_by :address
  # reverse_geocoded_by :latitude, :longitude
  before_validation :geocode, if: ->(obj){ obj.address.present? and obj.address_changed? }
  # , :reverse_geocode
  attr_reader :address

  belongs_to :host,
    class_name: "User",
    foreign_key: :host_id

  has_many :bookings, dependent: :destroy

  def address
    [street_address, city, state, country].compact.join(", ")
  end

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end

  def self.search_listings(query)
    query = "%" + query.to_s.downcase + "%"
    search_result = Listing.where('
      lower(title) LIKE ? or
      lower(category) LIKE ? or
      lower(state) LIKE ? or
      lower(city) LIKE ? or
      lower(host_name) LIKE ?',
        query, query, query, query, query
    )
    search_result
  end

end

# Listing.create(title: "AA", category: "Good", description: "school", street_address: "825 Battery", city: "San Francisco", state: "CA", country: "US")
# def available_between?(date_begin, date_end)
#    conflicting_bookings = self.bookings.where.not(
#      "(date_begin < :requested_start_date AND date_end < :requested_start_date)
#      OR
#      (date_end > :requested_end_date AND date_end > :requested_end_date)",
#       requested_start_date: date_begin, requested_end_date: date_end)
#    return (date_begin..date_end).all? do |day|
#      num_bookings_for_day = conflicting_bookings.select{
#        |booking| booking.date_begin <= day && booking.date_end >= day}
#        .count
#      num_bookings_for_day < self.places
#    end
#  end
