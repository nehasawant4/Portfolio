import "./app.scss"
import Navbar from "./components/navbar/Navbar.jsx";

const App = () => {
    return <div>
        <section id="About">
            <Navbar></Navbar>
        </section>
        <section id="Projects"> <Navbar></Navbar>Projects</section>
        <section id="Resume"> <Navbar></Navbar>Resume</section>
        <section id="Contact"> <Navbar></Navbar>Contact</section>
    </div>;
};

export default App;