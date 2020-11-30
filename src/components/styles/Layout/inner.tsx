import React from "react";
import { StyledInner } from "./styles";

const Inner: React.FC = ({ children }) => {
  return <StyledInner>{children}</StyledInner>;
};

export default Inner;
