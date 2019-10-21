import React, { Component } from 'react'
import MiniHotel from './MiniHotel';
import '../ressources/hotel.css'
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Notification from './Notification'
import { emptyReservations } from '../actions/hotel';
import {connect} from "react-redux";





class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false , toast : false , firstName : '' , lastName :''};

    this.showModal = this.showModal.bind(this);

}

  showModal() {
    this.setState({
        modal: !this.state.modal
    });
}





    render() {
        let hotels = this.props.hotels.map((hotel , index) => {
            return (
              <div>
              <MiniHotel className="miniHotel" key={index} hotel= {hotel} />
              <br/>
              </div>
            );
          });

          let reservationSummary = this.props.hotels.map((hotel , index) => {
            return (
              <div>
                {hotel.hotelName} -------> {hotel.number} * {hotel.price}
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

      <br/><br/>

      <Button onClick={this.showModal} variant="primary">Confirm</Button>
 

 <Container>
 <Modal show={this.state.modal} onHide={this.showModal}>
                        <Modal.Header closeButton>
                            <Modal.Title> Confirm Reservation </Modal.Title>
                        </Modal.Header>
                        <Form>

                        <Modal.Body>

                                <Form.Group controlId="firstName">
                                    <Form.Label>First Name : </Form.Label>
                                    <Form.Control  placeholder="First Name"/>
                                </Form.Group>

                                <Form.Group controlId="lastName">
                                    <Form.Label>Last Name : </Form.Label>
                                    <Form.Control placeholder="Last Name" />
                                </Form.Group>
                                <br/>

                                **-----------RESERVATION-----------**
                                {reservationSummary}

                                <br/>
                                <b>Total : {totalPrice} € </b>   <br/> 
                                **----------------------------------**



                           

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.showModal}>
                                Close
          </Button>
                            <Button  variant="primary" onClick={() => { this.props.handleEmptyReservations() ; this.setState({...this.state , toast : true , firstName : document.getElementById("firstName").value, lastName: document.getElementById("lastName").value}) ; this.showModal(); }}>
                                Save Reservation
          </Button>
                        </Modal.Footer>
                        </Form>
                    </Modal>

 </Container>
 <Container><Notification content="Reservation confirmed ;)" show={this.state.toast}  title={this.state.firstName}  /></Container>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
  return {
      handleEmptyReservations :() => {
      dispatch(emptyReservations());
    }
  
  }
};

export default connect(null , mapDispatchToProps)(Basket)
