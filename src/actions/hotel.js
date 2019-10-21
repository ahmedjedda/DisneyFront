import * as types from "./types";

export function addReservation(hotelReservation) {
  return {
    type: types.ADD_RESERVATION,
    payload: hotelReservation
  }
}


export function cancelReservation(hotel) {
  return {
    type: types.CANCEL_RESERVATION,
    payload: hotel
  }
}

export function fetchHotelsPending() {
  return {
      type: types.FETCH_HOTELS_PENDING
  }
}

export function fetchHotelsSuccess(products) {
  return {
      type: types.FETCH_HOTELS_SUCCESS,
      payload: products
  }
}

export function fetchHotelsError(error) {
  return {
      type: types.FETCH_HOTELS_ERROR,
      payload: error
  }
}

export function emptyReservations(error) {
  return {
      type: types.EMPTY_RESERVATIONS,
      payload: error
  }
}