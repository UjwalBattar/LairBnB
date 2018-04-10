class Listing < ApplicationRecord
  validates :title, :category, :description, presence: true
  validates :title, uniqueness: true
  # geocoded_by :address
  # reverse_geocoded_by :latitude, :longitude
  # after_validation :geocode, :reverse_geocode


  belongs_to :host,
    class_name: "User",
    foreign_key: :host_id

  # def address
  #   [:street_address, :city, :state, :country].compact.join(", ")
  # end
end
