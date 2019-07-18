import React from 'react';
import Info from '../blocks/Info';
import FirstCircle from '../img/number-one-in-a-circle.svg';


const position  = {
  firstCard: '1/2',
  secondCard: '2/3',
  thirdCard: '3/4',
  fourthCard: '4/5'
}

export default () => {
  return (
   <Info>
     <Info.Card position = {position.firstCard}>
        <Info.Icon src={FirstCircle}></Info.Icon>
        <Info.Text>Create Request</Info.Text>
     </Info.Card>
     <Info.Card position = {position.secondCard}>
        <Info.Icon src={FirstCircle}></Info.Icon>
        <Info.Text>Choose a car</Info.Text>
     </Info.Card>
     <Info.Card position = {position.thirdCard}>
        <Info.Icon src={FirstCircle}></Info.Icon>
        <Info.Text>Choose extras</Info.Text>
     </Info.Card>
     <Info.Card position = {position.fourthCard}>
        <Info.Icon src={FirstCircle}></Info.Icon>
        <Info.Text>Review & Book </Info.Text>
     </Info.Card>
   </Info>
  )
}
