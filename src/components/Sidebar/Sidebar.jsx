import { Outlet } from "react-router-dom";
import { Header, Menu, HeaderLink } from "./Sidebar.styled";

const Sidebar = () => {
  return (
    <>
      <Header>
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
    </>
  );
};

export default Sidebar;
