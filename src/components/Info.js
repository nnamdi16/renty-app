import React from "react";
import Info from "../blocks/Info";
import FirstCircle from "../img/verified.svg";
import SecondCircle from "../img/number-one-in-a-circle.svg";
import ThirdCircle from "../img/number-two-in-a-circle.svg";
import FourthCircle from "../img/number-three-in-a-circle.svg";

const position = {
  firstCard: "2/3",
  secondCard: "3/4",
  thirdCard: "4/5",
  fourthCard: "5/6"
};

export default () => {
  return (
    <Info>
      <Info.Card position="1/2" />
      <Info.Card position={position.firstCard}>
        <Info.Icon src={FirstCircle} />
        <Info.Text>Create Request</Info.Text>
      </Info.Card>
      <Info.Card
        position={position.secondCard}
        color="#424C57"
        fontColor="#FDFEFF"
      >
        <Info.Icon src={SecondCircle} />
        <Info.Text>Choose a car</Info.Text>
      </Info.Card>
      <Info.Card position={position.thirdCard}>
        <Info.Icon src={ThirdCircle} />
        <Info.Text>Choose extras</Info.Text>
      </Info.Card>
      <Info.Card position={position.fourthCard}>
        <Info.Icon src={FourthCircle} />
        <Info.Text>Review & Book </Info.Text>
      </Info.Card>
      <Info.Card position="6/7" />
    </Info>
  );
};
