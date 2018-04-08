import merge from "lodash/merge";

import {
  RECEIVE_ALL_LISTINGS,
  RECEIVE_SINGLE_LISTING
} from "../actions/listing_actions";

const listingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_LISTINGS:
      return merge({}, state, action.listings);
    case RECEIVE_SINGLE_LISTING:
      const newListing = { [action.listing.id]: action.listing };
      return merge({}, state, newListing);
    default:
      return state;
  }
};

export default listingsReducer;
