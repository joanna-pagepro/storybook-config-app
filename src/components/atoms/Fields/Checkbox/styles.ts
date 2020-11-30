import styled from "styled-components";

export const StyledCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const StyledCheckboxInput = styled.input.attrs({
  type: "checkbox",
})`
  margin-right: 8px;
`;
