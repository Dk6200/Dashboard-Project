import React from "react";
import NavBar from "./navbar";
import SideDash from "./SideDash";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <SideDash />
      <div className="flex ml-12">
        <div className="flex flex-col h-full fixed">
          <NavBar />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </div>
    </div>
  );
};
export default Layout;
