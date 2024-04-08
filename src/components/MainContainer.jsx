import PropTypes from "prop-types";
import Sidebar from "./Sidebar";

const MainContainer = ({ children, showSideBar }) => {
  return (
    <div className="h-[calc(100vh-60px)]">
      {showSideBar ? (
        <>
          <Sidebar />
          <div className="ml-[300px] p-5">{children}</div>
        </>
      ) : (
        children
      )}
    </div>
  );
};

MainContainer.propTypes = {
  children: PropTypes.node,
  showSideBar: PropTypes.bool,
};

export default MainContainer;
