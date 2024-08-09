import logo from "../images/logo.png";
import wp from "../images/wp.png";
import tg from "../images/tg.png";
import yt2 from "../images/yt2.png";
import linkedin from "../images/linkedin.png";

const Footer = () => {
  return (
    <div className="py-10 px-[7rem] bg-[#21212F] text-white">
      <div className=" flex justify-between items-start my-2">
        <div className="h-[8rem] w-[8rem]">
          <img
            src={logo}
            alt="Logo"
            className="h-[100%] w-[100%] object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 className="border-b-2 border-secondary">Explore</h1>

          <a href="#" className=" hover:text-secondary">
            Home
          </a>
          <a href="#" className=" hover:text-secondary">
            Courses
          </a>
          <a href="#" className=" hover:text-secondary">
            Instructor
          </a>
          <a href="#" className=" hover:text-secondary">
            Community
          </a>
          <a href="#" className=" hover:text-secondary">
            Reviews
          </a>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 className="border-b-2 border-secondary">Get In Touch</h1>
          <h2>+91 1234567890</h2>
          <h2>abc@gmail.com</h2>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 className="border-b-2 border-secondary">Follow Us On </h1>
          <div className="flex justify-between items-start">
            <a href="">
              <img
                src={wp}
                alt="Socials"
                className="h-[3rem] w-[3rem] object-cover mr-[1rem]"
              />
            </a>
            <a href="">
              <img
                src={tg}
                alt="Socials"
                className="h-[3rem] w-[3rem] object-cover mr-[1rem]"
              />
            </a>
            <a href="">
              <img
                src={yt2}
                alt="Socials"
                className="h-[3rem] w-[3rem] object-cover mr-[1rem]"
              />
            </a>
            <a href="">
              <img
                src={linkedin}
                alt="Socials"
                className="h-[3rem] w-[3rem] object-cover"
              />
            </a>
          </div>
        </div>
      </div>

      <h1 className="flex justify-center items-center text-slate-300 mt-8">Copyright &#169; 2024 All Rights Reserved.</h1>
    </div>
  );
};
export default Footer;
