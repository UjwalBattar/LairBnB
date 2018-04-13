class Booking < ApplicationRecord
  validates :listing_id, :guest_id, :guests, :from_date, :to_date, presence: true

  validate :start_must_come_before_end
  validate :does_not_overlap_booking

  belongs_to :listing,
    class_name: "Listing",
    foreign_key: :listing_id

  belongs_to :guest,
    class_name: "User",
    foreign_key: :guest_id


  def over_lapping_bookings
    Booking.where.not(id: self.id)
      .where(listing_id: listing_id)
      .where.not('from_date > :to_date OR to_date < :from_date', from_date: from_date, to_date: to_date)
  end

  def does_not_overlap_booking
    unless over_lapping_bookings.empty?
      errors[:base] <<
      'Booking conflicts with existing booking'
    end
  end

  def start_must_come_before_end
    errors[:from_date] << 'must specify a start date' unless from_date
    errors[:to_date] << 'must specify an end date' unless to_date
    errors[:from_date] << 'must come before end date' if from_date > to_date
  end

end
