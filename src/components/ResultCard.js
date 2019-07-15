import React, {Component} from 'react';
import {connect} from 'react-redux';
import ResultCard from '../blocks/ResultCard';
import Card from '../blocks/Card';
import CardItem from '../blocks/CardItem'
import  {carReport} from '../actions'

class App extends Component {
  componentDidMount() {
    this.props.carReport();
   
  }

  renderList() {
    const display = this.props.display || [];
    console.log(display);
    return display.map(car => {
      return (
        <CardItem key={car.model}>
             <CardItem.Details width='100%' >
             <CardItem.Images src={car.imageUrl}></CardItem.Images>
             </CardItem.Details>
             <CardItem.Details width='100%' column='2/3'>{car.make} {car.model}</CardItem.Details>
             <CardItem.Details width='100%' column='3/4' color= '#F2F3F4'>{car.year}</CardItem.Details>
           </CardItem>
      )
    })
  }

  render() {
    return (
      <ResultCard>
         <Card.Header width='50rem' height='3rem'></Card.Header>
         <Card.Body width='50rem' height='43rem'>
           {this.renderList()}
         </Card.Body>
      </ResultCard>
     );
  }
 
}

const mapStateToProps = state => {
  console.log(state.display);
  return {
    display: state.display.cars
  } ;
};

export default connect(mapStateToProps,{carReport})(App);