import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import StyledButton from "./StyledButton";
import { ThemeToggler } from "./ThemeToggler";
import { MdOutlineSearch } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <header className="h-[60px] border-b border-border sticky">
        <nav className="flex items-center h-full px-3 justify-between gap-5">
          <Link to="/" className="flex gap-2 items-center cursor-pointer">
            <img src={logo} className="h-10 min-w-10" />
            <h1 className="font-bold text-3xl text-tprimary hidden md:block mb-1">
              Bislerium
            </h1>
          </Link>
          <div className="flex items-center gap-2 py-2 px-4 rounded-md border border-border bg-card max-w-[600px] w-[600px] ">
            <MdOutlineSearch className="text-2xl text-tprimary" />
            <input
              type="text"
              placeholder="Search Bislerium"
              className="text-tprimary placeholder:text-tsecondary focus:outline-none bg-card w-full"
            ></input>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggler />
            <Link to="/signup">
              <StyledButton isOutline={true}>Signup</StyledButton>
            </Link>
            <Link to="/login">
              <StyledButton>Login</StyledButton>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
