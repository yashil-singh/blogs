import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { MdOutlineAccountCircle, MdAccountCircle } from "react-icons/md";
import { Fragment, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { Transition } from "@headlessui/react";
import { useMediaQuery } from "react-responsive";

const Sidebar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const isDesktop = useMediaQuery({ minWidth: 768 });

  function checkPath(path) {
    if (location.pathname === path) {
      return true;
    }

    return false;
  }
  return (
    <>
      <button
        className="fixed top-4 left-3 md:hidden text-2xl text-tprimary z-20"
        onClick={handleNav}
      >
        {isNavOpen ? <MdClose /> : <MdMenu />}
      </button>
      <Transition
        as={Fragment}
        show={isDesktop ? true : isNavOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform -translate-x-full opacity-0"
        enterTo="transform translate-x-0 opacity-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform translate-x-0 opacity-100"
        leaveTo="transform -translate-x-full opacity-0"
      >
        <nav
          className={`bg-background  ${
            isNavOpen ? "block" : "hidden"
          } md:block h-full shadow fixed w-[270px] max-w[270px] border-r border-r-border px-4 py-3 mt-14`}
        >
          <ul className="text-tprimary">
            <li className="flex">
              <a
                href="/"
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
              </a>
            </li>
            <li className="flex">
              <a
                href="/account"
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
              </a>
            </li>
          </ul>
        </nav>
      </Transition>
    </>
  );
};

export default Sidebar;
