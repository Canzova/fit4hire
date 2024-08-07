import Nav from "./components/Nav";
import Home from "./components/Home";
import Stats from "./components/Stats";
import Courses from "./components/Courses";
import Instructors from "./components/Instructors";
function App() {
  return (
    <div className=" font-public">
      <Nav/>
      <Home/>
      <Stats/>
      <Courses/>
      <Instructors/>
    </div>
  );
}

export default App;
