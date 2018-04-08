class Listing < ApplicationRecord
  validates :title, :category, :description, presence: true
  validates :title, uniqueness: true

  belongs_to :host,
    class_name: "User",
    foreign_key: :host_id

end
