export const fetchAllListings = data =>
  $.ajax({
    method: "GET",
    url: "/api/listings",
    data: { data }
  });

export const fetchSingleListing = id =>
  $.ajax({
    method: "GET",
    url: `/api/listings/${id}`
  });

export const createListing = listing =>
  $.ajax({
    method: "POST",
    url: "/api/listings",
    data: { listing }
  });
