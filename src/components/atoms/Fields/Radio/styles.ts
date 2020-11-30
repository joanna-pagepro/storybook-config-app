import styled from "styled-components";

export const StyledRadioLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const StyledRadioInput = styled.input.attrs({
  type: "radio",
})`
  margin-right: 8px;
`;
