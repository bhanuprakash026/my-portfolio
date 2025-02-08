"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const navbarRef = useRef<HTMLUListElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);

  // Toggle the navbar open/close
  const toggleNavbar = () => setIsOpen((prevState) => !prevState);

  const handleActiveTab = (e: React.MouseEvent<HTMLAnchorElement>, tab: string, href: string) => {
    e.preventDefault();  // Prevent default navigation
    setActiveTab(tab);
    if (isOpen) {
      setIsOpen(false); // Close the navbar on menu item click
    }
    // Use the Link component to handle navigation after closing
    setTimeout(() => {
      window.location.href = href;
    }, 200); // Delay navigation to ensure navbar closes before
  };

  function handleClickToCloseNav(event: MouseEvent) {
    if (navbarRef.current && !navbarRef.current.contains(event.target as Node) && !hamburgerRef.current?.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickToCloseNav);
    return () => {
      document.removeEventListener('click', handleClickToCloseNav);  // Cleanup event listener
    };
  }, [isOpen]);

  return (
    <header className="z-[1000]">
      {/* Desktop Navbar */}
      <motion.div
        className="z-[1000] hidden sm:block fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <ul className="flex p-4 items-center justify-between">
          {links?.map((eachLink) => {
            return (
              <motion.li
                className={activeTab === eachLink.name ? "bg-gray-600 text-white round rounded-full px-4 mb-2" : `cursor-pointer mb-2`}
                key={eachLink.hash}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              >
                <Link href={eachLink.hash} onClick={(e) => handleActiveTab(e, eachLink.name, eachLink.hash)}>{eachLink.name}</Link>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>

      {/* Mobile Navbar */}
      <div className="sm:hidden flex justify-between items-center p-4">
        <div className="fixed top-4 left-4 z-[10000] cursor-pointer h-[3rem] w-[3rem] rounded-full flex flex-col justify-center dark:bg-gray-800 bg-gray-200 shadow-lg items-center  backdrop-blur-lg" onClick={toggleNavbar} ref={hamburgerRef}>
          <div className="w-6 h-1 dark:bg-white/80 bg-black mb-1"></div>
          <div className="w-6 h-1 dark:bg-white/80 bg-black mb-1"></div>
          <div className="w-6 h-1 dark:bg-white/80 bg-black"></div>
        </div>

        {/* Mobile navbar items */}
        <motion.ul
          ref={navbarRef}
          className="z-[1000] fixed pt-16 flex flex-col items-center top-0 left-0 h-screen w-1/2 dark:bg-gray-950 backdrop-blur-md bg-gray-50 bg-opacity-50"
          initial={{ x: '-100%' }}
          animate={{ x: isOpen ? 0 : '-100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {links?.map((eachLink) => {
            return (
              <li className="cursor-pointer mb-2 sm:mb-0" key={eachLink.hash}>
                <a
                  href={eachLink.hash}
                  onClick={(e) => handleActiveTab(e, eachLink.name, eachLink.hash)}
                >
                  {eachLink.name}
                </a>
              </li>
            );
          })}
        </motion.ul>
      </div>
    </header>
  );
};

export default Header;
