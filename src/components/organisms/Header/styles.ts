import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  padding: 32px 0;
  background-color: #fff;
`;

export const StyledHeaderContent = styled.div`
  width: 100%auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledHeaderLogo = styled.img`
  height: 32px;
  width: auto;
  display: block;
  flex-shrink: 0;
`;

export const StyledHeaderNav = styled.nav`
  margin-left: auto;
  padding-left: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledHeaderNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const StyledHeaderNavListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export const StyledHeaderNavListLink = styled.a`
  text-decoration: none;
  outline: none;
  color: #000;
  transition: 250ms ease-in-out;
  font-size: 24px;
  &:active,
  &:focus {
    color: #000;
  }
  &:hover {
    color: #ccc;
  }
`;
