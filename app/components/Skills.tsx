"use client";
import React from 'react';
import SectionHeader from './section-heading';
import SkillsBackgroundParticles from './SkillsBackgroundParticles';
import { frontendDevelopmentData, backendDevelopmentData, toolsAndLibraries } from '@/lib/data';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <section id='skills' className="scroll-mt-0 h-screen relative sm:max-w-[50rem] w-full flex flex-col items-center justify-center text-center pt-[90px] mb-10">
            <div className="absolute inset-0 h-full -z-10 overflow-hidden">
                <SkillsBackgroundParticles />
            </div>
            <SectionHeader>Skills</SectionHeader>

            <div className='container overflow-x-hidden'>
                {/* Frontend Skills */}
                <div className='flex MyGradient mb-5'>
                    <motion.div className='flex flex-shrink-0'
                        initial={{ x: 0 }}
                        animate={{ x: '-100%' }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                        {frontendDevelopmentData.map((skill, i) => (
                            <div
                                className='borderBlack shadow-md px-4 py-2 bg-gray-200 m-2 text-black dark:bg-gray-800 dark:text-white'
                                key={i}
                            >
                                {skill}
                            </div>
                        ))}
                    </motion.div>

                    <motion.div className='flex flex-shrink-0'
                        initial={{ x: 0 }}
                        animate={{ x: '-100%' }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                        {frontendDevelopmentData.map((skill, i) => (
                            <div
                                className='borderBlack shadow-md px-4 py-2 bg-gray-200 m-2 text-black dark:bg-gray-800 dark:text-white'
                                key={i}
                            >
                                {skill}
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Backend Skills */}
                <div className='flex MyGradient mb-5'>
                    <motion.div className='flex flex-shrink-0 mask-imag'
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                        {backendDevelopmentData.map((skill, i) => (
                            <div
                                className='borderBlack shadow-md px-4 py-2 bg-gray-200 m-2 text-black dark:bg-gray-800 dark:text-white'
                                key={i}
                            >
                                {skill}
                            </div>
                        ))}
                    </motion.div>

                    <motion.div className='flex flex-shrink-0'
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                        {backendDevelopmentData.map((skill, i) => (
                            <div
                                className='borderBlack shadow-md px-4 py-2 bg-gray-200 m-2 text-black dark:bg-gray-800 dark:text-white'
                                key={i}
                            >
                                {skill}
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Tools and Libraries Skills */}
                <div className='flex MyGradient mb-5'>
                    <motion.div className='flex flex-shrink-0'
                        initial={{ x: 0 }}
                        animate={{ x: '-100%' }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                        {toolsAndLibraries.map((skill, i) => (
                            <div
                                className='borderBlack shadow-md px-4 py-2 bg-gray-200 m-2 text-black dark:bg-gray-800 dark:text-white'
                                key={i}
                            >
                                {skill}
                            </div>
                        ))}
                    </motion.div>

                    <motion.div className='flex flex-shrink-0'
                        initial={{ x: 0 }}
                        animate={{ x: '-100%' }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                        {toolsAndLibraries.map((skill, i) => (
                            <div
                                className='borderBlack shadow-md px-4 py-2 bg-gray-200 m-2 text-black dark:bg-gray-800 dark:text-white'
                                key={i}
                            >
                                {skill}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
