import React, { useRef } from "react";
import { WorkExperience } from "@/lib/types";
import { RxCross2 } from "react-icons/rx";

interface KnowMyWorkModalProps {
  workObject: WorkExperience;
  handleClose: () => void;
}

const KnowMyWorkModal: React.FC<KnowMyWorkModalProps> = ({ workObject, handleClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current && e.target === modalRef.current) {
      handleClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={handleCloseModal}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm px-4"
    >
      <div className="bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-xl border border-gray-300 p-6 max-w-lg w-full h-[80vh] mt-6 overflow-y-auto">
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={handleClose} className="text-gray-500 dark:text-gray-400 hover:text-red-500">
            <RxCross2 size={24} />
          </button>
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{workObject.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{workObject.location}</p>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-4">{workObject.description}</p>

        {/* Additional Details */}
        {workObject.details && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Company Details</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Company: {workObject.details.company}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Duration: {workObject.details.duration}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Location: {workObject.details.location}</p>

            {/* Tech Stack */}
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {workObject.details.techStack.map((tech, index) => (
                <div key={index} className="flex items-center bg-gray-100 dark:bg-gray-700 border shadow-md cursor-pointer border-black/20 px-3 py-1 rounded-md">
                  {tech.icon} <span className="ml-2 text-sm text-gray-800 dark:text-gray-200">{tech.name}</span>
                </div>
              ))}
            </div>

            {/* Responsibilities */}
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">Roles & Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm mt-2">
              {workObject.details.rolesAndResponsibilities.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>

            {/* Challenges */}
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">Challenges Faced</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm mt-2">
              {workObject.details.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default KnowMyWorkModal;
