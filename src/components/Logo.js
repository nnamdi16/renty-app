import React from 'react';
import Logo from '../blocks/Logo';
import Icon from '../img/sedan-car-model.svg';

export default  () => {
  return (
      <Logo>
        <Logo.Icon  src={Icon}></Logo.Icon>
        <Logo.Text>Renty</Logo.Text>
      </Logo>
  )
}
