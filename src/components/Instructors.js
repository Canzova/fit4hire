import nihal from "../images/nihal.png";
import vector1 from "../images/Vector 1.png";
import vector2 from "../images/Vector 2.png";
import { FaCode } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Instructors = () => {
  return (
    <div
      id="instructors"
      className="py-10 px-[7rem] bg-primary text-white md:px-[5rem] sm:px-[2rem]"
    >
      <h1 className="text-4xl font-bold sm:text-3xl">
        Meet Our <span className="text-secondary">Instructor</span>
      </h1>
      <span className="inline-block mt-5 md:text-xl">
        Various versions have evolved over the years, sometimes by accident,
      </span>
      <div className="flex justify-between items-center mt-12 md:flex-col md:gap-8">
        <div className="w-[40%] h-[100%] md:w-[80%] sm:w-[100%]">
          <img
            src={nihal}
            alt="Instructor"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-[50%] md:w-[100%]">
          <h1 className="text-4xl font-bold md:text-center sm:text-3xl">
            Nihal Singh
          </h1>
          <p className="text-secondary text-[1.5rem] pb-4 font-bold md:text-center sm:text-[1rem]">
            System Engineer at TCS
          </p>
          <h1 className="text-[1.5rem] sm:text-center">
            Nihal has successfully cracked placements in multiple organizations,
            including{" "}
            <span className="inline-block relative font-bold">
              TCS
              <img src={vector2} alt="border" className="absolute bottom-0 " />
            </span>{" "}
            and
            <span className="inline-block relative font-bold">
              Accenture.
              <img
                src={vector1}
                alt="border"
                className="absolute bottom-[-1px]"
              />
            </span>{" "}
            He has also solved over{" "}
            <span className="inline-block relative font-bold">
              800
              <img src={vector2} alt="border" className="absolute bottom-0" />
            </span>{" "}
            Data Structures and Algorithms problems.
          </h1>
          <div className="flex justify-start items-center gap-8 mt-8 md:justify-center">
            <div>
              <div className="bg-[#FFC27A] h-[3rem] w-[3rem] clipPath flex justify-center items-center cursor-pointer hover:bg-secondary md:w-[5rem] md:h-[5rem] sm:h-[4rem] sm:w-[4rem]">
                <a href="https://codolio.com/profile/Canzova" target="_blank">
                  <FaCode className="text-black text-2xl" />
                </a>
              </div>
              <h1>Codolio</h1>
            </div>
            <div>
              <div className="bg-[#FFC27A] h-[3rem] w-[3rem] clipPath flex justify-center items-center cursor-pointer hover:bg-secondary md:w-[5rem] md:h-[5rem] sm:h-[4rem] sm:w-[4rem]">
                <a
                  href="https://www.linkedin.com/in/nihalsingh2002/"
                  target="_blank"
                >
                  <FaLinkedinIn className="text-black text-2xl" />
                </a>
              </div>
              <h1>Linkedin</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Instructors;
