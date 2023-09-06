import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div>Sidebar</div>
      <Outlet />
    </>
  );
};

export default Sidebar;
