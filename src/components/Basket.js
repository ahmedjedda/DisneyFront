import React, { Component } from 'react'
import MiniHotel from './MiniHotel';
import '../ressources/hotel.css'

class Basket extends Component {
    

    render() {
        let hotels = this.props.hotels.map((hotel , index) => {
            return (
              <div>
              <MiniHotel className="miniHotel" key={index} hotel= {hotel} />
              <br/>
              </div>
            );
          });

          let totalPrice = this.props.hotels.reduce((total,hotel) => {
            return total + hotel.number * hotel.price;
          },0);
        return (
            <div>
             <b>Basket : </b>

              <br/> <br/>
                  <div >
        {hotels}
      </div>
      <br/><br/>
      <b>Total : {totalPrice} € </b>
      
            </div>
        )
    }
}

export default Basket
