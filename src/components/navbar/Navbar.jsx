import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar.jsx";
import {motion} from "framer-motion";

const itemVariants= {
    open: {
        y: 0,
        opacity:1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
}

const items = ["About", "Work", "Resume", "Contact",];

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
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Neha
                </motion.a>
                <div className="info">
                    {items.map(item => {
                        const href = item === "Resume" ? "/Resume.pdf" : `#${item}`;
                        return (
                            <motion.a
                                href={href}
                                key={item}
                                variants={itemVariants}
                                whileHover={{ scale: 1.25 }}
                                whileTap={{ scale: 0.95 }}>
                                {item}
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
