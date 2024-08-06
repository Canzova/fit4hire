
import hero from "../images/hero.png";
import vector1 from "../images/Vector 1.png";
import vector2 from "../images/Vector 2.png";
const Home = () => {
  // className="border-b-4 border-secondary"
  return (
    <div className="flex justify-around items-center bg-primary text-white">
      <div className="w-[40rem] pl-[5rem]">
        <p className="text-secondary text-[1.5rem] pb-2">START TO SUCCESS</p>
        <h1 className="text-[2.5rem]">
          Access To{" "}
          <span className="inline-block relative">
            5000+
            <img src={vector1} alt="border" className="absolute bottom-0" />
          </span>{" "}
          Courses from{" "}
          <span className="inline-block relative">
            300
            <img src={vector1} alt="border" className="absolute bottom-0" />
          </span>{" "}
          Instructors & Institutions
        </h1>
        <span className="text-slate-300">
          Various versions have evolved over the years, sometimes by accident,
        </span>
        <div className="pt-2">
          <button className="bg-secondary py-2 px-6 rounded-2xl text-black font-bold">Join Us Now</button>
        </div>
      </div>
      <div className="h-[35rem] w-[35rem]">
        <img
          src={hero}
          alt="Hero"
          className="h-[100%] w-[100%] object-contain"
        />
      </div>
    </div>
  );
};
export default Home;
