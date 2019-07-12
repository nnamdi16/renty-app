import React from 'react';
import Status from '../blocks/Status';

export default ()  =>{
  return (
    <Status>
      <Status.Button>French</Status.Button>
      <Status.Button>Choose Country</Status.Button>
      <Status.Button register>Register</Status.Button>
      <Status.Button signIn>Sign In</Status.Button>
    </Status>
  )
}
