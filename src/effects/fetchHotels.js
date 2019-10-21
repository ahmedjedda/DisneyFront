import {fetchHotelsPending, fetchHotelsSuccess , fetchHotelsError} from '../actions/hotel';

function fetchHotels() {
    return dispatch => {
        dispatch(fetchHotelsPending());
        fetch('http://localhost:3020/getHotels')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchHotelsSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchHotelsError(error));
        })
    }
}

export default fetchHotels;