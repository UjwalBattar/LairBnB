class Booking < ApplicationRecord
  validates :listing_id, :guest_id, :from_date, :to_date, presence: true

  belongs_to :listing,
    class_name: "Listing",
    foreign_key: :listing_id

  belongs_to :guest,
    class_name: "User",
    foreign_key: :guest_id

end
