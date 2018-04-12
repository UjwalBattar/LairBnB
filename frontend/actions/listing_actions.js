import * as APIUtil from "../util/listing_api_util";

export const RECEIVE_ALL_LISTINGS = "RECEIVE_ALL_LISTINGS";
export const RECEIVE_SINGLE_LISTING = "RECEIVE_SINGLE_LISTING";

export const receiveAllListings = listings => ({
  type: RECEIVE_ALL_LISTINGS,
  listings
});

export const receiveSingleListing = listing => ({
  type: RECEIVE_SINGLE_LISTING,
  listing
});

export const fetchAllListings = data => dispatch =>
  APIUtil.fetchAllListings(data).then(listings =>
    dispatch(receiveAllListings(listings))
  );

export const fetchSingleListing = id => dispatch =>
  APIUtil.fetchSingleListing(id).then(listing =>
    dispatch(receiveSingleListing(listing))
  );

export const createListing = listing => dispatch =>
  APIUtil.createListing(listing).then(formListing =>
    dispatch(receiveSingleListing(formListing))
  );
