"use client"

import React, { useState } from 'react'
import SectionHeader from './section-heading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { experiencesData } from '@/lib/data';
import 'react-vertical-timeline-component/style.min.css';
import KnowMyWorkModal from './KnowMyWorkModal';
import { WorkExperience } from '@/lib/types'
import { useTheme } from '@/Context/ThemeContextProvider';

const Experience = () => {

    const [isOpen, setIsOpen] = React.useState(false)
    const [selectedWork, setSelectedWork] = useState<WorkExperience | null>(null)
    const {theme} = useTheme()

    const handleModal = (item: WorkExperience) => {
        setIsOpen(true)
        setSelectedWork(item)
    }

    return (
        <div id="experience" className="scroll-mt-28 sm:max-w-[60rem]">
            <SectionHeader>Experience</SectionHeader>
            <VerticalTimeline className='w-full' lineColor=''>
                {experiencesData.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement
                                contentStyle={{
                                    background: theme === "light"? "#f3f4f6": "rgba(255, 255, 255, 0.05)", // Light mode background
                                    boxShadow: "0",
                                    border: "1px solid rgba(0, 0, 0, 0.1)",
                                    textAlign: 'left',
                                    padding: "1.3rem 2rem",
                                }}
                                contentArrowStyle={{
                                    borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.05)"
                                }}
                                date={item.date}
                                icon={item.icon}
                                iconStyle={{
                                    background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                                    fontSize: "1.5rem",
                                }}
                            >
                                <h3 className="font-semibold capitalize text-black dark:text-white">{item.title}</h3>
                                <p className="font-normal !mt-0 text-black dark:text-gray-300">{item.location}</p>
                                <p className="!mt-1 text-gray-700 dark:text-gray-400">{item.description}</p>

                                {item.type === "work" && 
                                    <button 
                                        onClick={() => handleModal(item)} 
                                        className='bg-gray-900 cursor-pointer text-white px-5 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition my-5 dark:bg-gray-700 dark:hover:bg-gray-600'>
                                        Know my work
                                    </button>
                                }
                            </VerticalTimelineElement>
                        </React.Fragment>
                    )
                })}
            </VerticalTimeline>

            {selectedWork && isOpen &&
                <KnowMyWorkModal workObject={selectedWork} handleClose={() => setIsOpen(false)} />
            }
        </div>
    )
}

export default Experience;
