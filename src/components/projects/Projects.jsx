import "./projects.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import {useRef} from "react";

const items = [
    {
        id:1,
        title: 'Image Classification Using CNN',
        img:'https://images.pexels.com/photos/17483874/pexels-photo-17483874/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-was-inspired-by-neural-networks-used-in-deep-learning-it-was-created-by-novoto-studio-as-part-of-the-visualising-ai-pr.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        desc:'Developed and trained a CNN-based multi-class image classification Deep Learning model using TensorFlow and OpenCV to categorize images into distinct classes.',
        link:'https://github.com/nehasawant4/Image-Classification-Using-CNN',
    },
    {
        id:2,
        title: 'Applicant Tracking System Using Google Gemini Pro Vision',
        img:'https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2024/02/09114343/Features-of-Applicant-Tracking-System.jpg',
        desc:'The system is designed to assist the recruitment process providing an efficient solution for employers to screen resumes while empowering job seekers to optimize their resumes boosting their chances of securing a job. It evaluates resumes in comparison to job descriptions, identifies candidates\' strengths and weaknesses, and provides tailored suggestions for resume enhancement. Additionally, the system calculates a match percentage and pinpoints missing keywords, aiding candidates in refining their applications to better align with job requirements.',
        link:'https://github.com/nehasawant4/ATS-GenAI-Google-Gemini',
    },
    {
        id:3,
        title: 'React: Blogging App',
        img:'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=800',
        desc:'A full-stack blog app with responsive UI and interactive UX developed with React, Next.js, CSS, MongoDB, etc. The app supports CRUD operations for blogs and comments, filtering of blogs based on categories and users, pagination, Google OAuth for Google Sign-In, etc.',
        link:'https://github.com/nehasawant4/Blogging-App-React',
    },
    {
        id:4,
        title: 'Flutter: Bilingual Math App',
        img:'https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&w=800',
        desc:'A mobile app for iOS/Android designed meticulously in Figma and developed using Flutter and Firebase, intended to interactively teach mathematics, assisting Hispanic children to overcome language barriers. Features include quizzes, games, flashcards, text-to-speech, streak calendar, etc.',
        link:'https://github.com/nehasawant4/Bilingual-Maths-Flutter-App',
    },
    {
        id:5,
        title: 'AWS: PPE Detection System',
        img:'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        desc:'Developed a Java web application integrated with AWS for detection of Personal Protective Equipment and monitoring its compliance on custom building premises. Used Amazon Rekognition for detection of PPE in images. Additionally used services like Amazon S3, DynamoDB, etc.',
        link:'https://github.com/nehasawant4/PPE-Detection-AWS-App',
    },
];

const Single = ({item}) => {
    const ref=useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["start start", "end start"]
    });

    const y=useTransform(scrollYProgress, [0,1],["0%", "-300%"]);

    return (
        <section ref={ref}>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt=""/>
                    </div> 
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button onClick={() => window.location.href = item.link}>
                            Learn More
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Projects = () => {
    const ref= useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });

    return(
        <div className="projects" ref={ref}>
            <div className="progress">
                <h1>Projects</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map(item=>(
                <Single item={item} key={item.id}/>
            ))}
        </div>
    );
};

export default Projects;
