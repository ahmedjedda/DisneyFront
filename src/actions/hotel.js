import * as types from "./types";

export function addReservation(hotelReservation) {
  return {
    type: types.ADD_RESERVATION,
    payload: {hotelReservation}
  }
}