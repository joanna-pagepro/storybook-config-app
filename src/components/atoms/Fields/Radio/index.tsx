import React from "react";
import { StyledRadioLabel, StyledRadioInput } from "./styles";

const Radio: React.FC = ({ children }) => {
  return (
    <StyledRadioLabel>
      <StyledRadioInput />
      {children}
    </StyledRadioLabel>
  );
};

export default Radio;
