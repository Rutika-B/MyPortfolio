import { useState } from "react";
import NavBar from "./Pages/NavBar";
import { Home } from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import CodingProfile from "./Pages/CodingProfile";
import Contact from "./Pages/Contact";
import SocialLinks from "./Pages/SocialLinks";
import Projects from "./Pages/Projects";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <CodingProfile/>
      <Contact/>
      <SocialLinks/>
      

    </div>
    </>
  );
}

export default App;
