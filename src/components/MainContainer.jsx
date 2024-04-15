import PropTypes from "prop-types";
import Sidebar from "./Sidebar";

const MainContainer = ({ children, showSideBar }) => {
  return (
    <div className="min-h-[calc(100vh-60px)] ">
      {showSideBar ? (
        <>
          <Sidebar />
          <div className="md:ml-[270px] p-5 pt-[75px]">{children}</div>
        </>
      ) : (
        <div className="p-5 pt-[75px]">{children}</div>
      )}
    </div>
  );
};

MainContainer.propTypes = {
  children: PropTypes.node,
  showSideBar: PropTypes.bool,
};

export default MainContainer;
