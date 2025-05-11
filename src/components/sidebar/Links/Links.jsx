import "./links.scss"
import {motion} from "framer-motion";

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
}

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

const Links = ({ setOpen }) => {
    const handleLinkClick = () => {
        setOpen(false);
    };

    return(
        <motion.div className="links" variants={variants}>
            {items.map(item => {
                const href = item === "Resume" ? "/Resume.pdf" : `#${item}`;
                return (
                    <motion.a
                        href={href}
                        key={item}
                        variants={itemVariants}
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleLinkClick}>
                        {item}
                    </motion.a>
                );
            })}
        </motion.div>
    );
};

export default Links;
