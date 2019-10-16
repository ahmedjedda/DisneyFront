import React, { Component } from 'react'
import Hotel from './Hotel';

class ListOfHotels extends Component {
  

    render() {
        let hotels = this.props.hotels.map((hotel,index) => {
            return (
              <Hotel key={index}  hotel= {hotel} />
            );
          });
        return (
            <div>
                  <div >
        {hotels}
      </div>
            </div>
        )
    }
}


export default ListOfHotels
