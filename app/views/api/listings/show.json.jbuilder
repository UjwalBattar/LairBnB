json.listing do
  json.partial! 'api/listings/listing', listing: @listing
  json.host do
    json.extract! @listing.host, :username, :image
  end
end

json.host do
  json.extract! @listing.host, :username, :image
end

json.reviews({})
