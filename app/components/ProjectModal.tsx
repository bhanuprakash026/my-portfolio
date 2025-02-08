import Image from 'next/image';
import React, { useRef } from 'react';
import { BsGithub, BsLink } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    features: string[];
    live: string;
    gitHub: string;
  };
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current && e.target === modalRef.current) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={handleCloseModal}
      className="fixed inset-0 z-[100000] bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm px-4"
    >
      <div className="bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-xl border border-gray-300 p-6 max-w-lg w-full h-[80vh] mt-6 overflow-y-auto">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 dark:text-gray-400 hover:text-red-500">
            <RxCross2 size={24} />
          </button>
        </div>

        <h1 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h1>
        <p className="text-md text-gray-800 dark:text-white mb-2">{project.description}</p>
        <Image
          src={project.imageUrl}
          alt="Project I worked on"
          quality={95}
        />
        <div className="flex flex-wrap gap-2 my-6">
          {project.tags.map((tech, index) => {
            return <div key={index} className="flex items-center bg-gray-100 dark:bg-gray-700 border shadow-md cursor-pointer border-black/20 px-3 py-1 rounded-md">
              {tech}
            </div>
          })}
        </div>

        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Features</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className='flex gap-3'>

          <a href={project.live} target="_blank" className="my-7 flex items-center gap-2">
            <BsLink className='text-3xl' />
            <p>Go to see</p>
          </a>

          <a href={project.gitHub} target="_blank" className="my-7 flex items-center gap-2">
            <BsGithub className='text-2xl' />
            <p>Go to see</p>
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
