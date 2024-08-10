import logo from "../images/logo.png";
import Btn from "../utilities/Btn";
const Nav = () => {
  return (
    <div className="flex justify-around items-center bg-primary text-white md:px-8 sm:hidden">
      <div className="h-[5rem] w-[5rem]">
        <img src={logo} alt="Logo" />
      </div>
      <div className="">
        <a href="#home" className="mx-6 hover:text-secondary md:mx-4">
          Home
        </a>
        <a href="#courses" className="mx-6 hover:text-secondary md:mx-4">
          Courses
        </a>
        <a href="#instructors" className="mx-6 hover:text-secondary md:mx-4">
          Instructor
        </a>
        <a href="#community" className="mx-6 hover:text-secondary md:mx-4">
          Community
        </a>
        <a href="#reviews" className="mx-6 hover:text-secondary md:mx-4">
          Reviews
        </a>
      </div>

      <a href="#community">
        <Btn text={"Join Us"} />
      </a>
    </div>
  );
};
export default Nav;
