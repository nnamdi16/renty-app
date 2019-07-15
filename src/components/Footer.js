import React from 'react';
import Footer from '../blocks/Footer';
import Card from '../blocks/Card';

const Header = {
  width:'100%',
  height: '15rem',
  color: '#FEFFFF'

}
export default () => {
  return (
  <Footer>
    {/* {Header.map(({width,height,color}, key))} */}
      <Card.Header width='100%' height='15rem' color='#FEFFFF'></Card.Header>
      <Card.Body width='100%' height='5rem' color='#F8F9FA'>
      </Card.Body>
  </Footer>
  )
}
