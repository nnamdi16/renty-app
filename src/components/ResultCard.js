import React from 'react';
import ResultCard from '../blocks/ResultCard';
import Card from '../blocks/Card';

export default () => {
  return (
   <ResultCard>
      <Card.Header width='50rem' height='3rem'></Card.Header>
      <Card.Body width='50rem' height='43rem'></Card.Body>
   </ResultCard>
  )
}