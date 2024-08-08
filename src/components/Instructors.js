import nihal from "../images/nihal.png";
import vector1 from "../images/Vector 1.png";
import vector2 from "../images/Vector 2.png";
import { FaCode } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Instructors = () => {
  return (
    <div className="py-10 px-[7rem] bg-primary text-white">
      <h1 className="text-4xl font-bold ">
        Meet Our <span className="text-secondary">Instructor</span>
      </h1>
      <span className="inline-block mt-5">
        Various versions have evolved over the years, sometimes by accident,
      </span>
      <div className="flex justify-between items-center mt-12">
        <div className="w-[40%] h-[100%]">
          <img
            src={nihal}
            alt="Instructor"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-[50%]">
          <h1 className="text-4xl font-bold ">Nihal Singh</h1>
          <p className="text-secondary text-[1.5rem] pb-4 font-bold">
            System Engineer at TCS
          </p>
          <h1 className="text-[1.5rem]">
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
          <div className="flex justify-start items-center gap-8 mt-8">
            <div>
              <div className="bg-[#FFC27A] h-[3rem] w-[3rem] clipPath flex justify-center items-center cursor-pointer hover:bg-secondary">
                <a href="https://codolio.com/profile/Canzova" target="_blank">
                  <FaCode className="text-black text-2xl" />
                </a>
              </div>
              <h1>Codolio</h1>
            </div>
            <div>
              <div className="bg-[#FFC27A] h-[3rem] w-[3rem] clipPath flex justify-center items-center cursor-pointer hover:bg-secondary">
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
