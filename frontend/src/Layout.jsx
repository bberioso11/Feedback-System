import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { UserDataProvider } from "./contexts/UserDataContext";
const Layout = () => {
  return (
    <>
      <UserDataProvider>
        <Header />
        <main>
          <Outlet />
        </main>
      </UserDataProvider>
    </>
  );
};

export default Layout;
