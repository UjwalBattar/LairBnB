class Api::ListingsSearchController < ApplicationController
  
  def index

    search_query = search_params[:query]

    if search_query.length < 2
      @listings = {}
    else
      @lisitngs = Listing.search_listings(search_query)
    end

    render "api/listings_search/index"
  end

  private

  def search_params
    params.require(:search).permit(:query)
  end

end
