export const fetchAllUsers = () =>
  $.ajax({
    method: "GET",
    url: "api/users"
  });

export const fetchSingleUser = id =>
  $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  });

export const createUser = user =>
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user }
  });
