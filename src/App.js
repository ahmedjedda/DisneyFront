import React, { Component } from 'react'
import './App.css';
import ListOfHotels from './components/ListOfHotels'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from './logo.svg';
import Basket from './components/Basket';
import { connect } from "react-redux";



class App extends Component {

  componentDidMount(){
console.log("hello app.js")  }
  render() {
  const hotels = [{hotelName : "hotel1" , description : "this is a good hotel 3* Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une langue (conjugaisons, construction et association des phrases…)1. Un texte n'a pas de longueur déterminée sauf dans le cas de poèmes à forme fixe comme le sonnet ou le haïku." , 
  image : "https://picsum.photos/id/59/200/300" , price : 200},{hotelName : "hotel2" , description : "this is a great hotel 5* Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une langue (conjugaisons, construction et association des phrases…)1. Un texte n'a pas de longueur déterminée sauf dans le cas de poèmes à forme fixe comme le sonnet ou le haïku." , 
  image : "https://picsum.photos/id/60/200/300" , price : 520} , {hotelName : "hotel3" , description : "this is nice  hotel 4* Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une langue (conjugaisons, construction et association des phrases…)1. Un texte n'a pas de longueur déterminée sauf dans le cas de poèmes à forme fixe comme le sonnet ou le haïku." , 
  image : "https://picsum.photos/id/61/200/300" , price : 300} , {hotelName : "hotel4" , description : "this is a coool hotel 2* Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une langue (conjugaisons, construction et association des phrases…)1. Un texte n'a pas de longueur déterminée sauf dans le cas de poèmes à forme fixe comme le sonnet ou le haïku." , 
  image : "https://picsum.photos/id/62/200/300" , price : 80}];
  return (
    <div className="hotel">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"  />
       
      </header>
<br/>
<br/>

      <Container><Row>
        <Col sm={7}>
        <ListOfHotels hotels={this.props.hotels} />

        </Col>
        <Col sm={1}>
        </Col>
        <Col sm={3} style={{border:"solid"}}>
          <Basket  hotels={this.props.reservations} />
        </Col>
        <Col sm={1}>
        </Col>

      </Row>
      </Container>
      <br/>
<br/>
    </div>
  );}
}
const mapStateToProps = state => {
  return {
    hotels: state.hotels , 
    reservations : state.reservations
  };
};
export default connect(mapStateToProps)(App);
