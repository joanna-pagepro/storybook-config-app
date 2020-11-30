import React from "react";
import { Inner } from "../../styles/Layout";
import { StyledFooter, StyledFooterLogo } from "./styles";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Inner>
        <StyledFooterLogo
          src="https://user-images.githubusercontent.com/321738/63501763-88dbf600-c4cc-11e9-96cd-94adadc2fd72.png"
          alt="logo"
        />
      </Inner>
    </StyledFooter>
  );
};

export default Footer;
