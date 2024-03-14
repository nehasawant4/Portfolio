import './work.scss'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

export const textVariant = (delay) => {
    return {
        hidden: {
            y: -50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay: delay,
            },
        },
    };
};

const experiences = [
    {
        title: "Software Engineer",
        company_name: "Siemens",
        icon: './siemens.png',
        iconBg: "#383E56",
        date: "March 2023 - July 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Senior Software Engineer",
        company_name: "Persistent Systems",
        icon: './persistent.png',
        iconBg: "#E6DEDD",
        date: "Nov 2020 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const ExperienceCard =({experience}) => (
    <VerticalTimelineElement
        contentStyle={{background: "#1d1836", color:"#fff"}}
        contentArrowStyle={{borderRight:'7px solid #232631'}}
        date ={experience.date}
        iconStyle={{background:experience.iconBg}}
        icon= {
            <div className='flex justify-center items-center w-full h-full'>
                <img src={experience.icon} alt={experience.company_name}
                    className='w-[10px] h-[10px] object-contain'
                />
            </div>
        }
    >
        <div>
            <h3 className='text-white text-[24px] font-bold'>
                {experience.title}</h3>
            <p className='text-secondary text-[16px] font-semibold'
               style={{margin:0}}>{experience.company_name}</p>
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
            {experience.points.map((point,index) =>(
                <li
                    key={`experience-point-${index}`}
                    className='text-white-100 text-[14px] pl-1 tracking-wider'
                >
                    {point}
                </li>
            ))}
        </ul>
    </VerticalTimelineElement>
);


const Work = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2>Experience</h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {experiences.map((experience,index) =>(
                        <ExperienceCard key={index} experience={experience}/>
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default Work;
