import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import {connect} from "react-redux";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {addReservation} from '../actions/hotel'


class Hotel extends Component {
    constructor(props) {
        super(props);
        this.state = { modal: false, confirm : false };

        this.showModal = this.showModal.bind(this);
        this.showConfimation =  this.showConfimation.bind(this)

    }

    showModal() {
        this.setState({
            modal: !this.state.modal
        });
    }
    showConfimation() {
        this.setState({
            confirm: !this.state.confirm
        });
    }

    render() {

        return (
            <div>





                <Container><Card ><Row><Col sm={4}>
                    <Card.Img variant="top" src={this.props.hotel.image}/>
                </Col><Col sm={8}>
                        <Card.Body>
                            <Card.Title>{this.props.hotel.hotelName}</Card.Title>
                            <Card.Text>
                               {this.props.hotel.description}
                         </Card.Text>
                            <Button onClick={this.showModal} variant="primary">Reserve</Button>
                        </Card.Body></Col></Row>
                </Card></Container>


                <Container>
                    <Modal show={this.state.modal} onHide={this.showModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Hotel Reservation : Hotel Name </Modal.Title>
                        </Modal.Header>
                        <Form>

                        <Modal.Body>

                                <Form.Group controlId="formGroupName">
                                    <Form.Label>Night Price : </Form.Label>
                                    <Form.Control readOnly placeholder={this.props.hotel.price}/>
                                </Form.Group>

                                <Form.Group controlId="numberOfNights">
                                    <Form.Label>Number of nights : </Form.Label>
                                    <Form.Control placeholder="please put the number of nights" />
                                </Form.Group>
                 


                           

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.showModal}>
                                Close
          </Button>
                            <Button  variant="primary" onClick={() => {this.showModal() ; this.showConfimation() ; 
                            ///    const hotelReservation  =  this.props.hotel ; hotelReservation['number'] = 3 ; 
                                this.props.handleAddReservation({...this.props.hotel, number : document.getElementById("numberOfNights").value})}}>
                                Save Changes
          </Button>
                        </Modal.Footer>
                        </Form>
                    </Modal>
                </Container>


            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleAddReservation :(hotel) => {
        dispatch(addReservation(hotel));
      }
    
    }
  };

export default connect(null , mapDispatchToProps)(Hotel)
