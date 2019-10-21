import React, { Component } from 'react'
import './App.css';
import ListOfHotels from './components/ListOfHotels'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from './logo.svg';
import Basket from './components/Basket';
import { connect } from "react-redux";
import fetchProducts from './effects/fetchHotels'



class App extends Component {

  componentDidMount(){
console.log("hello app.js")  }

componentWillMount() {
  this.props.handleFetchHotels();
}
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
        {this.props.error && 
        <h2>there some problem !! check the console !!  </h2> 
      }
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


const mapDispatchToProps = dispatch => {
  return {
      handleFetchHotels :() => {
      dispatch(fetchProducts());
    }
  
  }
};
const mapStateToProps = state => {
  return {
    hotels: state.hotels , 
    reservations : state.reservations,
    error : state.error
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
