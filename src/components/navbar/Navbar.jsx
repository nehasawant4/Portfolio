import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar.jsx";
import {motion} from "framer-motion";

const Navbar = () => {
    return(
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.a
                    className="name"
                    href="#About"
                    initial={{opacity:0, scale:0.5}}
                    animate={{opacity:1, scale:1}}
                    transition={{duration:0.5}}
                >
                    Neha
                </motion.a>
                <div className="info">
                    <a href="#About">About</a>
                    <a href="#Work">Work</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Contact">Contact</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
