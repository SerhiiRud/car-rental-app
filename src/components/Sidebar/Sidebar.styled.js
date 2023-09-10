import styled from "styled-components";
import { NavLink as StyledLink } from "react-router-dom";

export const Container = styled.div`
  width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.header`
  border-bottom: 2px grey solid;
  padding: 20px;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
`;

export const HeaderLink = styled(StyledLink)`
  text-decoration: none;
  color: grey;

  &.active {
    color: red;
  }
`;
