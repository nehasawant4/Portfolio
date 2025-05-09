import "./contact.scss"
import {motion} from "framer-motion";

const Contact = () => {
    return(
        <div className="contact">
            <div className="wrapper">
                <div className="textContainer">
                    <h1>Let's Connect!</h1>
                    <div className="item">
                        <h2>Mail</h2>
                        <span>nehasawant4@gmail.com</span>
                    </div>
                    <div className="item">
                        <h2>Phone</h2>
                        <span>+1 (408) 640-4982</span>
                    </div>
                    <div className="item">
                        <h2>Address</h2>
                        <span>Santa Clara, CA</span>
                    </div>
                </div>
                <div className="social">
                    <motion.a whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.95 }} href="mailto:nehasawant4@gmail.com"><img src="/gmail.png" alt=""/></motion.a>
                    <motion.a whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.95 }} href="https://www.linkedin.com/in/nehasawant4/"><img src="/linkedin.png" alt=""/></motion.a>
                    <motion.a whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.95 }} href="https://github.com/nehasawant4"><img src="/github.png" alt=""/></motion.a>
                    <motion.a whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.95 }} href="https://www.instagram.com/art_birt/"><img src="/instagram.png" alt=""/></motion.a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
