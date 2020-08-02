import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const Icon = styled.img``;

  var icon = "";
  switch (props.condition) {
    case "Cloudy":
      icon = `https://image.flaticon.com/icons/svg/149/149209.svg`;
      break;
    case "Clear":
      icon = `https://image.flaticon.com/icons/svg/2917/2917242.svg`;
      break;
    case "Haze":
      icon = `https://image.flaticon.com/icons/svg/119/119075.svg`;
      break;
    default:
      icon = `https://image.flaticon.com/icons/svg/2917/2917242.svg`;
      break;
  }

  return <Icon src={icon} width="80" height="80" alt="Weather Icon" />;
};

export default Icon;
