import React from "react";
import { Inner } from "../../styles/Layout";
import { headerNavItems } from "./consts";
import {
  StyledHeader,
  StyledHeaderContent,
  StyledHeaderLogo,
  StyledHeaderNav,
  StyledHeaderNavList,
  StyledHeaderNavListItem,
  StyledHeaderNavListLink,
} from "./styles";
import { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = ({ items = headerNavItems }) => {
  return (
    <StyledHeader>
      <Inner>
        <StyledHeaderContent>
          <StyledHeaderLogo
            src="https://user-images.githubusercontent.com/321738/63501763-88dbf600-c4cc-11e9-96cd-94adadc2fd72.png"
            alt="logo"
          />
          <StyledHeaderNav>
            <StyledHeaderNavList>
              {items.map(({ to, label, key }) => (
                <StyledHeaderNavListItem {...{ key }}>
                  <StyledHeaderNavListLink href={to}>
                    {label}
                  </StyledHeaderNavListLink>
                </StyledHeaderNavListItem>
              ))}
            </StyledHeaderNavList>
          </StyledHeaderNav>
        </StyledHeaderContent>
      </Inner>
    </StyledHeader>
  );
};

export default Header;
