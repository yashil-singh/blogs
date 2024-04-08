import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { MdOutlineAccountCircle, MdAccountCircle } from "react-icons/md";

const Sidebar = () => {
  function checkPath(path) {
    if (location.pathname === path) {
      return true;
    }

    return false;
  }
  return (
    <nav className="h-full shadow fixed w-[270px] max-w[270px] border-r border-r-border px-4 py-3">
      <ul className="text-tprimary">
        <li className="flex">
          <Link
            to="/"
            className={`flex items-center gap-2 w-full px-5 py-3 rounded-md text-tprimary font-bold transition-all duration-200 ${
              checkPath("/") ? "bg-bbackground" : "hover:bg-hover"
            } `}
          >
            {checkPath("/") ? (
              <AiFillHome className="text-2xl" />
            ) : (
              <AiOutlineHome className="text-2xl" />
            )}
            Home
          </Link>
        </li>
        <li className="flex">
          <Link
            to="/account"
            className={`flex items-center gap-2 w-full px-5 py-3 rounded-md text-tprimary font-bold transition-all duration-200 ${
              checkPath("/account") ? "bg-bbackground" : "hover:bg-hover"
            } `}
          >
            {checkPath("/account") ? (
              <MdAccountCircle className="text-2xl" />
            ) : (
              <MdOutlineAccountCircle className="text-2xl" />
            )}
            Account
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
