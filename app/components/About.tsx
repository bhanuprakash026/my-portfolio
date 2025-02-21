"use client"
import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './section-heading'
import Image from 'next/image';

const About = () => {
    return (
        <motion.section
            id='about'
            className="max-w-[60rem] text-center leading-8 scroll-mt-28 mx-auto"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <SectionHeader>About Me</SectionHeader>

            <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-6 md:space-y-0">
                {/* Image */}
                <div className="filter drop-shadow-[20px_20px_20px_rgba(0,0,0,0.3)] md:w-[620px] md:h-[300px] overflow-hidden">
                    <Image
                        className="w-full "
                        src="/about-laptop.png"
                        priority={true}
                        quality="100"
                        width="400"
                        height="200"
                        alt="my-image"
                    />
                </div>

                {/* Content */}
                <div className="md:w-[50%] text-left">
                    <p className="mb-3 dark:text-white/80">
                        I am a passionate <span className="font-medium">Full-Stack Web Developer</span> with a background in
                        <span className="font-medium"> Accounting</span> who transitioned into the tech industry to follow my love for programming.
                        After completing a coding bootcamp, I developed expertise in{" "}
                        <span className="font-medium">React, Next.js, Node.js, Express.js and MongoDB</span>, with additional experience in{" "}
                        <span className="font-medium">TypeScript, TailwindCSS and BootStrap</span>.
                    </p>

                    <p className="mb-3 dark:text-white/80">
                        What excites me most about software development is{" "}
                        <span className="italic">problem-solving</span>—the thrill of breaking down complex challenges and crafting
                        efficient, scalable solutions. I am always eager to{" "}
                        <span className="font-medium">learn new technologies</span> and stay up-to-date with industry trends.
                        Currently, I am actively seeking a <span className="font-medium">full-time opportunity</span> as a{" "}
                        <span className="font-medium">Software Developer</span> where I can contribute my skills and grow professionally.
                    </p>
                </div>

            </div>
        </motion.section>
    )
}

export default About
