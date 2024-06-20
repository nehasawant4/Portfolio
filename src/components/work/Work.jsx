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
                type: "tween",
                duration: 2,
                delay: delay,
                ease: "easeInOut"
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
            "Developed Perl automation scripts for comprehensively testing wayside and onboard equipment of CBTC System.",
            "Performed code reviews, conducted test coverage analysis maintaining over 90% coverage, documented traceability, and release notes.",
        ],
    },
    {
        title: "Senior Software Engineer",
        company_name: "Persistent Systems",
        icon: './persistent.png',
        iconBg: "#fff",
        date: "Nov 2020 - Jan 2023",
        points: [
            "Engineered Python scripts for integration and functional testing of Rovius Cloud Platform powered by Apache CloudStack.",
"Designed test strategies and executed testing for Virtual Machines, Networking, Storage, KVM Agent, VMware, XenServer, etc.",
"Developed Shell scripts for automating the IaaS management server installation and configuration, reducing manual efforts by 85%.",
"Enhanced automation framework on Jenkins and fixed test scripts on GitLab decreasing 90% test failures due to framework issues.",
"Led regular Build Verification Tests and Regression tests, troubleshooting critical issues, which reduced post-release defects.",
"Deployed Docker containers on Linux VMs and exhaustively tested Kubernetes cluster deployment in CloudStack.",
"Designed and developed scripts for bulk operations on CloudStack for performance testing. Executed performance tests on Cloud Platform, consolidated and visualized results showing API response time, CPU, and memory usage, etc.",
"Assisted migration of CI/CD infrastructure to new servers, including network reconfiguration and script enhancements in CI/CD pipeline.",
"Mentored Junior Engineers on Cloud Infrastructure concepts, Automation, KVM virtualization, and Kubernetes."
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
            <motion.div className="title" variants={textVariant()}>
                <h1>Experience</h1>
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
