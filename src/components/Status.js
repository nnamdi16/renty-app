import React from 'react';
import Status from '../blocks/Status';

export default ()  =>{
  return (
    <Status>
      <Status.Button color='#F7F8F9' fontColor='#ABAFB1' width='8rem'>French</Status.Button>
      <Status.Button color='#EF813D' fontColor='#FBFFFF' width='10rem'>Choose Country</Status.Button>
      <Status.Button register>Register</Status.Button>
      <Status.Button signIn>Sign In</Status.Button>
    </Status>
  )
}
