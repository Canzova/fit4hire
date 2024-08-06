import Nav from "./components/Nav";
import Home from "./components/Home";
import Stats from "./components/Stats";
import Courses from "./components/Courses";
function App() {
  return (
    <div className=" font-public">
      <Nav/>
      <Home/>
      <Stats/>
      <Courses/>
    </div>
  );
}

export default App;
