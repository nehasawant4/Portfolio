import "./app.scss"
import Navbar from "./components/navbar/Navbar.jsx";
import About from "./components/about/About.jsx";
import Parallax from "./components/parallax/Parallax";
import Work from "./components/work/Work.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";

const App = () => {
    return(
        <div>
            <section id="About">
                <Navbar />
                <About />
            </section>
            <section id="Work">
                <Work />
            </section>
            <Projects/>
            <section id="Contact">
                <Contact/>
            </section>
        </div>
    );
};

export default App;
