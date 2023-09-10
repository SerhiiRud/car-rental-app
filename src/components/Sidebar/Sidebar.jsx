import { Outlet } from "react-router-dom";
import {
  Container,
  LogoImage,
  LogoLink,
  Header,
  Menu,
  HeaderLink,
} from "./Sidebar.styled";
import logo from "../../images/png/logo.png";

const Sidebar = () => {
  return (
    <Container>
      <Header>
        <LogoLink to="/">
          <LogoImage src={logo} alt="logo" />
        </LogoLink>

        <Menu>
          <li>
            <HeaderLink to="/">Home</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/cars">Cars</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/favorites">Favorite Cars</HeaderLink>
          </li>
        </Menu>
      </Header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Sidebar;
