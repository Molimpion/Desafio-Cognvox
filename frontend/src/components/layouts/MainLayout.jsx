import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

const MainLayout = () => {
  return (
    <div
      className="section"
      style={{ display: "flex", width: "100%", minHeight: "100vh" }}
    >
      <div style={{ flexShrink: 0 }}>
        <Sidebar />
      </div>
      <div className="corpo" style={{ flexGrow: 1, width: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
