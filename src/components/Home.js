import hero from "../images/hero.png";
import vector1 from "../images/Vector 1.png";

const Home = () => {
  // className="border-b-4 border-secondary"
  return (
    <div
      id="home"
      className="flex justify-around items-center bg-primary text-white sm:flex-col sm:pt-[2rem]"
    >
      <div className="w-[40rem] pl-[5rem] md:pl-[3rem] md:w-[50%] sm:w-[100%] px-[2rem]">
        <p className="text-secondary text-[1.5rem] pb-2 md:text-[1rem]">
          START TO SUCCESS
        </p>
        <h1 className="text-[2.5rem] md:text-[2rem] md:pb-2">
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
        <span className="text-slate-300 md:text-xl">
          Various versions have evolved over the years, sometimes by accident,
        </span>
        <div className="pt-2">
          <a href="#community">
            <button className="bg-secondary py-2 px-6 rounded-2xl text-black font-bold ">
              Join Us Now
            </button>
          </a>
        </div>
      </div>
      <div className="h-[35rem] w-[35rem] md:w-[50%] md:h-[30rem] sm:w-[100%] sm:h-[100%] sm:pb-8 sm:mt-[2rem]">
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
