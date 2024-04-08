import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
