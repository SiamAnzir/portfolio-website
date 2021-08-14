import NavBar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

const App = () => {
  return (
    <>
        <section>
            <NavBar/>
            <About/>
            <Projects/>
            <Skills/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </section>
    </>
  );
}

export default App;
