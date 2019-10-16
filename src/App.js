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
