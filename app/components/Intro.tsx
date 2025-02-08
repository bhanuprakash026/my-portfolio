"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import ParticlesContainer from "./ParticlesContainer";
import { calculateDuration } from '@/lib/data';

const Intro = () => {
    return (
        <section id="home" className="relative w-full flex flex-col items-center justify-center text-center pt-[90px] mb-10 scroll-mt-50 overflow-hidden">

    {/* Particle Effect */}
    <div className="absolute w-screen h-full z-0">
        <ParticlesContainer />
    </div>

    {/* Profile Image */}
    <div className="relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: 'tween',
                        duration: 0.2
                    }}
                >
                    <Image 
                        className="object-cover shadow-xl border-white border-[7px] rounded-full h-[250px] w-[250px] sm:h-[350px] sm:w-[350px]" 
                        src="https://res.cloudinary.com/dkmpwjbyo/image/upload/v1738428554/cx02mfnyxcjt8hh87x1z.jpg" 
                        priority={true} 
                        quality="100" 
                        width="250" 
                        height="250" 
                        alt="my-image" 
                    />
                    <motion.span className="absolute text-5xl bottom-0 right-[60px]"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 125,
                            delay: 0.15,
                            duration: 0.7
                        }}
                    >👋</motion.span>
                </motion.div>
            </div>

    {/* Introduction Text */}
    <motion.div className="relative z-10 bg-white/10 dark:bg-black/30 backdrop-blur-lg p-6 rounded-lg shadow-xl mt-6 max-w-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
    >
        <p className="text-2xl font-semibold text-gray-900 dark:text-white">
            Hello, I'm <span className="text-primary font-bold">Bhanu Prakash Tankasala</span>. 
            A <span className="text-secondary font-bold">Full-Stack Developer</span> with 
            <span className="font-bold"> {calculateDuration("1-05-2023")}</span> of experience.  
        </p>
        <p className="mt-3 text-gray-700 dark:text-gray-300">
            I specialize in <span className="text-accent">React (Next.js)</span> and love 
            crafting intuitive UI/UX experiences.
        </p>
    </motion.div>

    {/* CTA Buttons */}
    <motion.div className="my-6 flex flex-wrap justify-center gap-4 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
    >
        <Link className="group bg-[#1a1a1a] dark:bg-gray-900 text-white px-6 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition border border-white/20 shadow-lg"
            href="#contact">
            Contact Me 
            <BsArrowRight className="group-hover:translate-x-2 transition text-primary" />
        </Link>

        <a className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition shadow-lg"
            href="Bhanu_Prakash_Frontend_Developer_1Year_8Months_Resume.pdf" download>
            Download Resume <HiDownload />
        </a>

        <a href="https://www.linkedin.com/in/bhanu-prakash-tankasala/" target="_blank" 
            className="bg-blue-600 p-4 text-white flex items-center gap-2 rounded-full text-[1.35rem] hover:scale-110 transition shadow-lg">
            <BsLinkedin />
        </a>

        <a href="https://github.com/bhanuprakash026/" target="_blank" 
            className="bg-gray-800 p-4 text-white flex items-center gap-2 rounded-full text-[1.35rem] hover:scale-110 transition shadow-lg">
            <FaGithubSquare />
        </a>
    </motion.div>

</section>

    );
};

export default Intro;
