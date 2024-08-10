import Btn from "../utilities/Btn";
import logo from "../images/logo.png";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative hidden sm:block bg-primary">
      <div className="pb-8 px-[2rem] py-[1rem]">
        <div className="flex justify-between items-center">
          <div className="h-[5rem] w-[5rem]">
            <img src={logo} alt="Logo" />
          </div>
          <RxHamburgerMenu
            onClick={() => {
              setOpen(true);
            }}
            className="text-secondary h-[2rem] w-[2rem] cursor-pointer"
          />
        </div>
      </div>

      <div
        className={`z-10 absolute top-0 left-0 h-[100vh] w-[100%] py-[1rem] bg-black px-[2rem] transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="h-[5rem] w-[5rem]">
            <img src={logo} alt="Logo" />
          </div>
          <RxCross2
            onClick={() => {
              setOpen(false);
            }}
            className="text-secondary h-[2rem] w-[2rem] cursor-pointer"
          />
        </div>
        <div className="text-white flex flex-col justify-center items-center mt-8 gap-8 text-2xl">
          <a
            href="#home"
            className="mx-6 hover:text-secondary md:mx-4"
            onClick={() => {
              setOpen(false);
            }}
          >
            Home
          </a>
          <a
            href="#courses"
            className="mx-6 hover:text-secondary md:mx-4"
            onClick={() => {
              setOpen(false);
            }}
          >
            Courses
          </a>
          <a
            href="#instructors"
            className="mx-6 hover:text-secondary md:mx-4"
            onClick={() => {
              setOpen(false);
            }}
          >
            Instructor
          </a>
          <a
            href="#community"
            className="mx-6 hover:text-secondary md:mx-4"
            onClick={() => {
              setOpen(false);
            }}
          >
            Community
          </a>
          <a
            href="#reviews"
            className="mx-6 hover:text-secondary md:mx-4"
            onClick={() => {
              setOpen(false);
            }}
          >
            Reviews
          </a>
          <a
            href="#community"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Btn text={"Join Us"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
