import React from "react";
import { ButtonMode, ButtonSize } from "./enums";
import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  mode = ButtonMode.primary,
  size = ButtonSize.big,
  children,
  ...props
}) => {
  return <StyledButton {...{ mode, size, ...props }}>{children}</StyledButton>;
};

export default Button;
