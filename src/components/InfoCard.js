import React from 'react';
import Card from '../blocks/Card';
import InfoCard from '../blocks/InfoCard'

export default () => {
  return (
    <InfoCard>
      <Card>
      <Card.Header height='3rem'></Card.Header>
      <Card.Body height='10rem'></Card.Body>
    </Card>
    </InfoCard>
  )
}
