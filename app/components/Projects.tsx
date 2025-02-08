"use client";

import React, { useRef, useState } from 'react';
import SectionHeader from './section-heading';
import { projectsData } from '@/lib/data';
import { motion, useTransform } from 'framer-motion';
import { useScroll } from 'framer-motion';
import Image from 'next/image';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[number] | null>(null);

  return (
    <section id="projects" className="scroll-mt-28">
      <SectionHeader>My Projects</SectionHeader>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} onKnowMore={() => setSelectedProject(project)} />
          </React.Fragment>
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject as unknown as { title: string; description: string; tags: string[]; imageUrl: string; features: string[]; live: string; gitHub:string; }}  // Type assertion
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

type ProjectProps = (typeof projectsData)[number] & { onKnowMore: () => void };

function Project({ title, description, tags, imageUrl, onKnowMore }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative  hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <button
            onClick={onKnowMore}
            className="bg-gray-900 cursor-pointer text-white px-5 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition my-5 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Know my work
          </button>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}

export default Projects;