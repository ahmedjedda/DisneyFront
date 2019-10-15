import React, { Component } from 'react'
import MiniHotel from './MiniHotel';

class Basket extends Component {
    

    render() {
        let hotels = this.props.hotels.map((hotel , index) => {
            return (
              <MiniHotel key={index} hotel= {hotel} />
            );
          });
        return (
            <div>
             <b>Basket : </b>

              <br/> <br/>
                  <div >
        {hotels}
      </div>
      <br/><br/>
      <b>Total : </b>
      
            </div>
        )
    }
}

export default Basket
