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
                {/* <motion.div className="slidingText" variants={sliderVariants} initial="initial" animate="animate">
                    Machine Learning | Cloud Computing | Full-Stack Development | UI/UX Design
                </motion.div> */}
                <div className="imageContainer">
                    <img src="/neha.png" alt="" height="750"/>
                </div>
            </div>
        </div>
    );
};

export default About;
