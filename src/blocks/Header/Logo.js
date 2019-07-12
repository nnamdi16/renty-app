import React from 'react'
import CarIcon from '../../img/sedan-car-model.svg'
import styled from 'styled-components';
export default function Logo({className}) {
  return (
    <LogoContainer className= {className}>
      
      <Icon src={CarIcon} alt='Renty Icon' />
      <IconName>Renty</IconName>
    </LogoContainer>
  )
}

const Icon = styled.img `
 width: 50%;
 height: 50%;
 grid-column: 1/2;
 place-self: center;
 justify-self:end;
 
 
`
const IconName = styled.span `
 width:5rem;
 grid-column: 2/3;
 align-self: center;
 justify-self: start;
 font-size: 2rem;
 font-weight:bolder;
 
`

const LogoContainer = styled.div `
  display:grid;
  grid-template-columns: repeat(2, 1fr);

`