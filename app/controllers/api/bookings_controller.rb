class Api::BookingsController < ApplicationController
  before_action :require

  def new
    @booking = Booking.new
  end

  def create
    listing_bookings = Listing.find(params[:listing_id]).bookings
    @booking = current_user.bookings.new(booking_params)

    if @booking.save
      render 'api/bookings/index'
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def index
    @bookings = current_user.bookings
  end

  # def show
  # end

  def destroy
    @booking = Booking.find(paramd[:id])
    if @booking.guest_id == current_user.id
      @booking.destroy
    else
      render json: ["Must be logged in"], status: 422
    end

  end

  private

  def booking_params
    params.require(:booking).permit(:listing_id, :guest_id, :from_date, :to_date)
  end
end
