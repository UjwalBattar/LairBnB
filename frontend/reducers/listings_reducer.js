import merge from "lodash/merge";

import {
  RECEIVE_ALL_LISTINGS,
  RECEIVE_SINGLE_LISTING
} from "../actions/listing_actions";

const listingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_LISTINGS:
      return action.listings;
    case RECEIVE_SINGLE_LISTING:
      const newListing = { [action.listing.id]: action.bench };
      return merge({}, state, newListing);
    default:
      return state;
  }
};
