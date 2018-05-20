class Api::ListingsController < ApplicationController
  def create
    @listing = Listing.new(listing_params)
    if @listing.save
      render 'api/listings/show'
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def index
    search_query = search_params[:query]
    if search_query.length < 2
      @listings = (bounds ? Listing.in_bounds(bounds) : Listing.all)
    else
      @listings = Listing.search_listings(search_query)
    end
    
  end

  def show
    @listing = Listing.includes(:host).find(params[:id])

    if @listing
      render 'api/listings/show'
    else
      render json: ["Listing not available"], status: 404
    end
  end

  private

  def listing_params
    params.require(:listing).permit(:title, :state, :category, :description, :is_booked?, :latitude, :longitude, :image, :host)
  end

  def bounds
    params[:bounds]
  end
end
