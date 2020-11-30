import React from "react";
import {
  StyledTile,
  StyledTileDate,
  StyledTileDescription,
  StyledTileMedia,
  StyledTileTitle,
} from "./styles";
import { TileProps } from "./types";

const Tile: React.FC<TileProps> = ({
  href,
  src,
  alt,
  title,
  description,
  date,
}) => {
  return (
    <StyledTile {...{ href }}>
      <StyledTileMedia {...{ src, alt }} />
      <StyledTileDate dateTime={date}>{date}</StyledTileDate>
      <StyledTileTitle>{title}</StyledTileTitle>
      <StyledTileDescription>{description}</StyledTileDescription>
    </StyledTile>
  );
};

export default Tile;
