import React from "react";
import { StyledCheckboxInput, StyledCheckboxLabel } from "./styles";

const Checkbox: React.FC = ({ children }) => {
  return (
    <StyledCheckboxLabel>
      <StyledCheckboxInput />
      {children}
    </StyledCheckboxLabel>
  );
};

export default Checkbox;
