import React from "react";
import Nav from "./Nav";
const Layout = ({ children }) => {
  return (
    <div className="">
      <Nav />
      <div className="max-w-4xl my-0 mx-auto  text-white sm:px-8xl:px-0 px-8">
        {children}
      </div>
    </div>
  );
};

export default Layout;
