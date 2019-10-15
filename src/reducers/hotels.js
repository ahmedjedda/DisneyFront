import * as types from "../actions/types";


const cool = [{hotelName : "hotel1" , description : "this is a good hotel 3* Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une langue (conjugaisons, construction et association des phrases…)1. Un texte n'a pas de longueur déterminée sauf dans le cas de poèmes à forme fixe comme le sonnet ou le haïku." , 
image : "https://picsum.photos/id/59/200/300" , price : 200},{hotelName : "hotel2" , description : "this is a great hotel 5* Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une langue (conjugaisons, construction et association des phrases…)1. Un texte n'a pas de longueur déterminée sauf dans le cas de poèmes à forme fixe comme le sonnet ou le haïku." , 
image : "https://picsum.photos/id/60/200/300" , price : 520} , {hotelName : "hotel3" , description : "this is nice  hotel 4* Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une langue (conjugaisons, construction et association des phrases…)1. Un texte n'a pas de longueur déterminée sauf dans le cas de poèmes à forme fixe comme le sonnet ou le haïku." , 
image : "https://picsum.photos/id/61/200/300" , price : 300} , {hotelName : "hotel4" , description : "this is a coool hotel 2* Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une langue (conjugaisons, construction et association des phrases…)1. Un texte n'a pas de longueur déterminée sauf dans le cas de poèmes à forme fixe comme le sonnet ou le haïku." , 
image : "https://picsum.photos/id/62/200/300" , price : 80}];


const hotelReducer = (state = {hotels : cool , reservations : []}, action) => {
  switch (action.type) {
    case types.ADD_RESERVATION:
      console.log(action.payload);
      const newState = {...state};
      const newReservation =  {...action.payload['hotelReservation']}; 
      newState.reservations.push(newReservation);
      return newState;
      break;

   

    default:
      return state;
  }
};

export default hotelReducer;