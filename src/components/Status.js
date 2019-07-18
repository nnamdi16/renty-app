import React from "react";
import Status from "../blocks/Status";

export default () => {
  return (
    <Status>
      <Status.Button
        color="#F7F8F9"
        fontColor="#ABAFB1"
        width="8rem"
        border="1px solid #D0D1D2"
        justify="end"
      >
        French
      </Status.Button>
      <Status.Button
        color="#EF813D"
        fontColor="#FBFFFF"
        width="10rem"
        justify="end"
        column="2/3"
      >
        Choose Country
      </Status.Button>
      <Status.Button register row="2/3" justify="end" column="2/3">
        Register
      </Status.Button>
      <Status.Button signIn row="2/3" column="2/3">
        Sign In
      </Status.Button>
    </Status>
  );
};
