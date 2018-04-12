export const fetchAllBookings = data =>
  $.ajax({
    method: "GET",
    url: "/api/bookings",
    data
  });

export const fetchSingleBooking = id =>
  $.ajax({
    method: `/api/bookings/${id}`
  });

export const createBooking = booking =>
  $.ajax({
    method: "POST",
    url: "/api/bookings",
    data: { booking }
  });

export const deleteBooking = id =>
  $.ajax({
    method: "DELETE",
    url: `/api/bookings/${id}`
  });
