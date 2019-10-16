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