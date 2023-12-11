import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AppLayout = (props) => {
  return (
    <div
      style={{
        padding: "50px 0px 0px 370px",
      }}
    >
      <Sidebar />
      <main>{props.children}</main>
    </div>
  );
};

export default AppLayout;
