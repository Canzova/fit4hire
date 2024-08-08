import { PiGraduationCapLight } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import { IoVideocamOutline } from "react-icons/io5";
import { PiUsersThree } from "react-icons/pi";

const Stats = () => {
  return (
    <div className="bg-slate-100 flex justify-around items-center text-black p-10">
      <div className="flex justify-between items-center h-[5rem] w-[12rem]">
        <div className="bg-[#20B486] h-[100%] w-[50%] clipPath flex justify-center items-center">
          <PiGraduationCapLight className="text-4xl text-white" />
        </div>
        <div className="">
          <h1 className="text-2xl font-bold">300</h1>
          <span className="text-slate-500">Instructors</span>
        </div>
      </div>
      <div className="flex justify-between items-center h-[5rem] w-[12rem]">
        <div className="bg-[#6D3AE9] h-[100%] w-[50%] clipPath flex justify-center items-center">
          <LuUsers className="text-4xl text-white" />
        </div>
        <div className="">
          <h1 className="text-2xl font-bold">20,000+</h1>
          <span className="text-slate-500">Students</span>
        </div>
      </div>
      <div className="flex justify-between items-center h-[5rem] w-[12rem]">
        <div className="bg-[#EE455A] h-[100%] w-[50%] clipPath flex justify-center items-center">
          <IoVideocamOutline className="text-4xl text-white" />
        </div>
        <div className="">
          <h1 className="text-2xl font-bold">10,000+</h1>
          <span className="text-slate-500">Videos</span>
        </div>
      </div>
      <div className="flex justify-between items-center h-[5rem] w-[12rem]">
        <div className="bg-[#21C9FF] h-[100%] w-[50%] clipPath flex justify-center items-center">
          <PiUsersThree className="text-4xl text-white" />
        </div>
        <div className="">
          <h1 className="text-2xl font-bold">1,00,000+</h1>
          <span className="text-slate-500">Users</span>
        </div>
      </div>
    </div>
  );
};
export default Stats;
