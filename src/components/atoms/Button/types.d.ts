import { ButtonHTMLAttributes } from "react";
import { ButtonMode, ButtonSize } from "./enums";

export interface ButtonCommonProps {
  mode?: ButtonMode;
  size?: ButtonSize;
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonCommonProps;
