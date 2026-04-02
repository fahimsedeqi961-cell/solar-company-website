import Navbar from "./components/layout/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WhyChoose from "./pages/WhyChoose";
import Projects from "./pages/Projects";
import GetAqoute from "./pages/FAQ";
import TeamMembers from "./pages/Team";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <WhyChoose />
      <Projects />
      <GetAqoute />
      <TeamMembers />
    </>
  )
}