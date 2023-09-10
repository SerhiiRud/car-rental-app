import styled from "styled-components";
import { NavLink as StyledLink } from "react-router-dom";

export const Container = styled.div`
  width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.header`
  background-color: #4267b2;
  padding: 20px;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
`;

export const HeaderLink = styled(StyledLink)`
  text-decoration: none;
  color: #ffffff;

  &.active {
    color: #ffbf00;
  }

  &:hover,
  &:focus {
    color: #ffbf00;
  }
`;
