import "./app.scss"
import Navbar from "./components/navbar/Navbar.jsx";
import About from "./components/about/About.jsx";
import Work from "./components/work/Work.jsx";
import Contact from "./components/contact/Contact.jsx";
import ProjectCarousel from "./components/projects/ProjectCarousel.jsx";

const App = () => {
    return(
        <div>
            <Navbar />
            <div className="scroll-wrapper">
            <section id="About">
                <About />
            </section>
            <section id="Work">
                <Work />
            </section>
            <section id="Projects">
                <ProjectCarousel/>
            </section>
            <section id="Contact">
                <Contact/>
            </section>
            </div>            
        </div>
    );
};

export default App;
