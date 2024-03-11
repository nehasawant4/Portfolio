import {useState} from "react";
import {motion} from "framer-motion";
import "./sidebar.scss"
import Links from "./Links/Links.jsx";
import ToggleButton from "./toggleButton/ToggleButton.jsx";

const variants = {
    open:{
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            type: "spring",
            stiffness: 20,
        },
    },
    closed:{
        clipPath: "circle(0px at 0px 0px)",
        transition:{
            delay:0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    }
};

const Sidebar = () => {

    const [open, setOpen] = useState(false)
    return(
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
                <Links/>
            </motion.div>
            <ToggleButton setOpen={setOpen}/>
        </motion.div>
    );
};

export default Sidebar;
