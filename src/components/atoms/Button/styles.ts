import styled from "styled-components";
import { ButtonMode, ButtonSize } from "./enums";
import { ButtonCommonProps } from "./types";

export const StyledButton = styled.button<ButtonCommonProps>`
  border-radius: 4px;
  outline: none;
  background-color: ${({ mode }) =>
    (mode === ButtonMode.primary && "#3B61FF") ||
    (mode === ButtonMode.secondary && "transparent")};
  border-width: 2px;
  border-style: solid;
  border-color: ${({ mode }) =>
    (mode === ButtonMode.primary && "#3B61FF") ||
    (mode === ButtonMode.secondary && "#2F2F2F")};
  color: ${({ mode }) =>
    (mode === ButtonMode.primary && "#fff") ||
    (mode === ButtonMode.secondary && "#2F2F2F")};
  padding: ${({ size }) =>
    (size === ButtonSize.big && "16px 40px") ||
    (size === ButtonSize.medium && "16px") ||
    (size === ButtonSize.small && "8px")};
  font-size: ${({ size }) =>
    (size === ButtonSize.big && "24px") ||
    (size === ButtonSize.medium && "16px") ||
    (size === ButtonSize.small && "14px")};

  &:disabled,
  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
`;
