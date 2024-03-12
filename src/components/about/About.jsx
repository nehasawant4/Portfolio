import "./about.scss"
import {motion} from "framer-motion";

const sliderVariants = {
    initial:{
        x:0,
    },
    animate:{
        x:"-600%",
        transition:{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 15,
        },
    },
}
const About = () => {
    return(
        <div className="about">
            <div className="wrapper">
                <motion.div className="slidingText" variants={sliderVariants} initial="initial" animate="animate">
                    Full Stack | UI/UX Design | Mobile App | Frontend
                </motion.div>
                <div className="imageContainer">
                    <img src="/neha.jpg" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default About;
