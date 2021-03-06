class Api::BookingsController < ApplicationController


  def create
    @booking = Booking.new(booking_params)
    # @booking.guest_id = current_user.id

    if @booking.save!
      render 'api/bookings/show'
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def index
    @bookings = Booking.where(guest_id: current_user.id)
  end

  def destroy
    @booking = Booking.find(params[:id])
    if @booking.guest_id == current_user.id
      booking_id = @booking.id
      @booking.destroy
      render json: ["#{booking_id}"]
    else
      render json: ["Must be logged in"], status: 422
    end

  end

  private

  def booking_params
    params.require(:booking).permit(:listing_id, :guest_id, :from_date, :to_date, :guests)
  end
end
