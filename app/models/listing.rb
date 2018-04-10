class Listing < ApplicationRecord
  validates :title, :category, :description, presence: true
  validates :title, uniqueness: true
  geocoded_by :address
  # reverse_geocoded_by :latitude, :longitude
  before_validation :geocode
  # , :reverse_geocode
  attr_reader :address

  belongs_to :host,
    class_name: "User",
    foreign_key: :host_id

  def address
    [street_address, city, state, country].compact.join(", ")
  end

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end
  
end

# Listing.create(title: "AA", category: "Good", description: "school", street_address: "825 Battery", city: "San Francisco", state: "CA", country: "US")
