import * as types from "../actions/types";





const hotelReducer = (state = {hotels : [] , reservations : [], pending: false, error: null}, action) => {
  switch (action.type) {
    case types.ADD_RESERVATION:
        return { 
          ...state,
          reservations : state.reservations.concat(action.payload)
      }
  
      case types.CANCEL_RESERVATION:
          console.log(action.payload)
            return { 
              ...state,
              reservations : state.reservations.filter((data) => data !== action.payload)
          }

           
          case types.EMPTY_RESERVATIONS:
            return {
                ...state,
                reservations : []
            } 


          case types.FETCH_HOTELS_PENDING : 
          return {
              ...state,
              pending: true
          }
      case types.FETCH_HOTELS_SUCCESS:
          return {
              ...state,
              pending: false,
              hotels: action.payload
          }
      case types.FETCH_HOTELS_ERROR:
          return {
              ...state,
              pending: false,
              error: action.payload
          }
  

    default:
      return state;
  }
};

export default hotelReducer;