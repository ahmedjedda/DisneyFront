import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import {connect} from "react-redux";
import Button from 'react-bootstrap/Button'
import {cancelReservation} from '../actions/hotel'







class MiniHotel extends Component {


    render() {
        return (
            <div>
                 <Container><Card ><Row><Col sm={4}>
                    <Card.Img variant="top" src={this.props.hotel.image}/>
                 </Col><Col sm={8}>
                        <Card.Body>
                            <Card.Title>{this.props.hotel.number} nights * {this.props.hotel.price} €</Card.Title>
                            <Button onClick={()=>
                               this.props.handleCancelReservation(this.props.hotel)} >Cancel</Button>

                        </Card.Body></Col></Row>
                </Card></Container>

            </div>
        )
    }

    
}

const mapDispatchToProps2 = dispatch => {
    return {
        handleCancelReservation :(hotel) => {
        dispatch(cancelReservation(hotel));
      }
    
    }
  };

export default connect(null , mapDispatchToProps2)(MiniHotel)


