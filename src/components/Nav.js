import logo from "../images/logo.png";
import Btn from "../utilities/Btn";
const Nav = () => {
  return (
    <div className="flex justify-around items-center bg-primary text-white">
      <div className="h-[5rem] w-[5rem]">
        <img src={logo} alt="Logo" />
      </div>
      <div className="">
        <a href="#" className="mx-6 hover:text-secondary">
          Home
        </a>
        <a href="#" className="mx-6 hover:text-secondary">
          Courses
        </a>
        <a href="#" className="mx-6 hover:text-secondary">
          Instructor
        </a>
        <a href="#" className="mx-6 hover:text-secondary">
          Community
        </a>
        <a href="#" className="mx-6 hover:text-secondary">
          Reviews
        </a>
      </div>

      <Btn text={"Join Us"} />
    </div>
  );
};
export default Nav;
