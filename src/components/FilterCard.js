import React from 'react'
import FilterCard from '../blocks/FilterCard';
import Card from '../blocks/Card';

export default () => {
  return (
    <FilterCard>
      <Card>
      <Card.Header width='20rem' height='3rem'></Card.Header>
      <Card.Body width='20rem' height='20rem'></Card.Body>
      </Card>
    </FilterCard>
  )
}
