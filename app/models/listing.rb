class Listing < ApplicationRecord
  validates :title, :category, :description, :is_booked?, presence: true
  validates :title, uniqueness: true

  belongs_to :host,
    class_name: :User

end
