import './work.scss'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from './experiences';

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
                type: "tween",
                duration: 2,
                delay: delay,
                ease: "easeInOut"
            },
        },
    };
};


const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
        className="work__experience-card"
        contentStyle={{ background: "black", color: "" }}
        contentArrowStyle={{ borderRight: '7px solid #B185A733' }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
            <div className="work__image-container">
                <img src={experience.icon} alt={experience.company_name} className="work__image" />
            </div>
        }
    >
        <div>
            <h3 className="work__title">{experience.title}</h3>
            <p className="work__jobdesc">{experience.company_name}</p>
        </div>

        <ul className='work__list'>
            {experience.points.map((point, index) => (
                <li
                    key={`experience-point-${index}`}
                    className='work__list-item'
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
                <h1 className='work-title'>Experience</h1>

            <div className='work mt-20'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default Work;
