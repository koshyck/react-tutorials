import React from "react";
import styled from "@emotion/styled";

const Condition = ({ temp, condition }) => {
  const Temp = styled.h1`
    font-family: "Fira Sans", sans-serief;
    font-size: 2rem;
  `;
  const State = styled.h3`
    font-family: "Merriweather", sans-serief;
    font-size: 1.22rem;
  `;
  return (
    <>
      <Temp>{temp} C</Temp>
      <State>{condition}</State>
    </>
  );
};

export default Condition;
