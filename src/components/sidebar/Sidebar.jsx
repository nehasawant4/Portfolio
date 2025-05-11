import {useState, useEffect, useRef} from "react";
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
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target) && open) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return(
        <motion.div className="sidebar" animate={open ? "open" : "closed"} ref={sidebarRef}>
            <motion.div className="bg" variants={variants}>
                <Links setOpen={setOpen}/>
            </motion.div>
            <ToggleButton setOpen={setOpen}/>
        </motion.div>
    );
};

export default Sidebar;
