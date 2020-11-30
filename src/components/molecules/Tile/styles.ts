import styled from "styled-components";

export const StyledTile = styled.a`
  text-decoration: none;
  padding: 16px;
  background-color: #fff;
  color: #000;
  outline: none;
  border-radius: 4px;
  box-shadow: 0 10px 10px 0 rgba(47, 47, 47, 0.1);
  border: 1px solid #ccc;
  display: block;
`;

export const StyledTileMedia = styled.img`
  height: auto;
  width: 100%;
  max-width: 100%;
  display: block;
  margin-bottom: 16px;
`;

export const StyledTileDate = styled.time`
  text-transform: uppercase;
  font-size: 12px;
  color: #ccc;
  margin-bottom: 8px;
  display: block;
`;

export const StyledTileTitle = styled.h2`
  font-size: 24px;
  color: #000;
  margin-bottom: 12px;
`

export const StyledTileDescription = styled.p`
  font-size: 16px;
  color: #000;
`
