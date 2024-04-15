import logo from "../assets/logo.png";
import StyledButton from "./StyledButton";
import { ThemeToggler } from "./ThemeToggler";
import { MdOutlineSearch } from "react-icons/md";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { BsThreeDots } from "react-icons/bs";
import { Fragment, useEffect, useState } from "react";
import { MdOutlineAccountCircle, MdLogin } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const checkPath =
    location.pathname === "/login" || location.pathname === "/signup"
      ? true
      : false;

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setIsOpen(true);
      }

      if (isOpen && event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header className="w-full bg-background z-10 h-[60px] border-b border-border fixed">
        <nav className="flex items-center h-full px-3 justify-between gap-5">
          <a
            href="/"
            className={`flex gap-2 items-center cursor-pointer ${
              checkPath ? "" : "ml-8"
            } md:m-0`}
          >
            <img src={logo} className="h-10 w-10 min-w-10" />
            <h1 className="font-bold text-3xl text-tprimary hidden md:block mb-1">
              Bislerium
            </h1>
          </a>
          <button
            onClick={toggleModal}
            className="hidden sm:flex items-center justify-between py-2 px-4 rounded-md border border-border bg-card hover:bg-bbackground transition-all duration-200 max-w-[600px] w-[600px] "
          >
            <div className="flex items-center gap-2">
              <MdOutlineSearch className="text-2xl text-tprimary" />
              Search Bislerium
            </div>
            <p className="text-sm text-tsecondary font-semibold">CTRL+K</p>
          </button>
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggler />
            <a href="/signup">
              <StyledButton isOutline={true}>Signup</StyledButton>
            </a>
            <a href="/login">
              <StyledButton>Login</StyledButton>
            </a>
          </div>
          <div className="sm:hidden flex items-center gap-1">
            <div>
              <button onClick={toggleModal}>
                <MdOutlineSearch className="text-2xl text-tprimary" />
              </button>

              <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-10"
                  onClose={toggleModal}
                >
                  <div className="fixed inset-0 bg-black/25" />

                  <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Dialog.Panel className="w-full min-h-[500px] max-h-full max-w-2xl transform overflow-hidden rounded-2xl bg-card text-left align-middle shadow-xl transition-all">
                          <div>
                            <div className="flex items-center gap-2 py-2 px-4 rounded-md bg-card ">
                              <MdOutlineSearch className="text-2xl text-tprimary" />
                              <input
                                type="text"
                                placeholder="Search Bislerium"
                                className="text-tprimary placeholder:text-tsecondary focus:outline-none bg-card w-full py-2"
                              />
                              <p
                                onClick={toggleModal}
                                className="py-1 px-2 cursor-pointer border border-border rounded-md hover:bg-hover text-tsecondary font-semibold"
                              >
                                ESC
                              </p>
                            </div>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </div>
            <Menu>
              <Menu.Button
                className={
                  "text-2xl text-tprimary active:bg-bbackground rounded-full p-1"
                }
              >
                <BsThreeDots />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  className={
                    "min-w-[200px] z-50 max-w-[500px] bg-background flex flex-col border border-border absolute top-12 mt-2 right-1 px-2 rounded-md text-tprimary text-md divide-y divide-bbackground"
                  }
                >
                  <div className="py-2">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`flex flex-row gap-2 items-center p-2 rounded-md ${
                            active && "bg-bbackground"
                          }`}
                          href="/account"
                        >
                          <MdOutlineAccountCircle />
                          Account
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={`flex p-2 rounded-md cursor-pointer ${
                            active && "bg-bbackground w-full"
                          }`}
                        >
                          <ThemeToggler textSize={"text-md"} addText={true} />
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-2">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`flex flex-row gap-2 text-md items-center p-2 rounded-md ${
                            active && "bg-bbackground"
                          }`}
                          href="/login"
                        >
                          <MdLogin />
                          Login / Sign Up
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
