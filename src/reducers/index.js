import {combineReducers} from "redux";
import hotels from "./hotels";

const hotelState = combineReducers({
    hotels
});

export default hotelState;
