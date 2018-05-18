export const fetchSearchResults = query =>
  $.ajax({
    method: "GET",
    url: "/api/listings_search",
    data: { search: { query } }
  });
