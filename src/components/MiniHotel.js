import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'




class MiniHotel extends Component {


    render() {
        return (
            <div>
                 <Container><Card ><Row><Col sm={4}>
                    <Card.Img variant="top" src={this.props.hotel.image}/>
                 </Col><Col sm={8}>
                        <Card.Body>
                            <Card.Title>Night :   {this.props.hotel.price} €</Card.Title>
                            
                        </Card.Body></Col></Row>
                </Card></Container>

            </div>
        )
    }
}

export default MiniHotel
