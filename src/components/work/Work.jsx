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
        iconBg: "#fff",
        date: "March 2023 - July 2023",
        points: [
            "Part of a 12-member Test Automation team for Communications Based Train Control System (CBTC) by Siemens Mobility. ",
            "Developed over 20 Perl automation scripts for comprehensively testing wayside and onboard equipment of CBTC System.",
            "Conducted coverage analysis maintaining over 80% code coverage, documented traceability matrix and release notes.",
            "Troubleshot and verified bugs in CBTC simulator. Conducted reviews of team members' test scripts.",
        ],
    },
    {
        title: "Senior Software Engineer",
        company_name: "Persistent Systems",
        icon: './persistent.png',
        iconBg: "#fff",
        date: "Nov 2020 - Jan 2023",
        points: [
            "Part of a 5-member cross-functional QA team for testing Rovius Cloud Platform (RCP) powered by Apache CloudStack.",
            "Created Docker containers and exhaustively tested cloud deployment in Kubernetes clusters.",
            "Executed performance testing within RCP simulator hosting more than 30,000 VMs and discovered a 90% increase in API response time after modifications in database and APIs.",
            "Collaborated with DevOps team to add RCP support on Ubuntu Linux and improved the CI/CD pipeline.",
            "Maintained and enhanced automation framework built on Jenkins decreasing 40% test failures due to framework issues.",
        ],
    },
];
const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
        className="work__experience-card"
        contentStyle={{ background: "#B185A733", color: "" }}
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
            <motion.div variants={textVariant()}>
                <h2>Experience</h2>
            </motion.div>

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