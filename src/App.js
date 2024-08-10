import Nav from "./components/Nav";
import Home from "./components/Home";
import Stats from "./components/Stats";
import Courses from "./components/Courses";
import Instructors from "./components/Instructors";
import Reviews from "./components/Reviews";
import Community from "./components/Community";
// import Responsive from "./components/Responsive";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
function App() {
  return (
    <div className=" font-public">
      <Nav/>
      <MobileNav/>
      <Home/>
      <Stats/>
      <Courses/>
      <Instructors/>
      <Reviews/>
      <Community/>
     {/* <Responsive/> */}
     <Footer/>
   
    </div>
  );
}

export default App;
