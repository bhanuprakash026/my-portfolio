
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import vidztubeThumbNail from '@/public/vidztubeThumbNail.png'
import nxttrends_thumbnail from "@/public/nxttrends_thumbnail.png";
import { SiCypress, SiJest, SiNodedotjs, SiRedux, SiTypescript } from "react-icons/si";
import { WorkExperience } from "./types";

export const calculateDuration = (startDate: string): string => {
  // Ensure correct date format (YYYY-MM-DD)
  const [day, month, year] = startDate.split("-").map(Number);
  const start = new Date(year, month - 1, day); // Months are zero-based in JS Date

  const now = new Date();
  
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years} Years ${months} Months`;
};


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData: WorkExperience[]  = [
  {
    title: "B.Tech Mechanical Engineering",
    location: "Mahabubnagar, Sree Visvesvaraya Institute of Technology & Science",
    description: "Completed B.Tech in Mechanical Engineering with a CGPA of 7.1.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
    type: "education",
  },
  {
    title: "Junior Frontend Developer",
    location: "Hyderabad, Gachibowli",
    description:
      `Currently working as a Junior Frontend Developer with ${calculateDuration("1-05-2023")} of experience.`,
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
    type: "work",
    details: {
      company: "Perigord Data Solution India Pvt Ltd",
      duration: calculateDuration("1-05-2023"),
      location: "Hyderabad, Gachibowli",
      techStack: [
        { icon: React.createElement(FaReact), name: "React" },
        { icon: React.createElement(SiRedux), name: "Redux" },
        { icon: React.createElement(SiTypescript), name: "TypeScript" },
        { icon: React.createElement(SiNodedotjs), name: "Node.js" },
        { icon: React.createElement(SiJest), name: "Jest" },
        { icon: React.createElement(SiCypress), name: "Cypress.io" },
      ],
      rolesAndResponsibilities: [
        "Building user-friendly, responsive UI components using React.",
        "Implementing designs and wireframes provided by UX/UI designers.",
        "Writing clean and maintainable code following best practices.",
        "Optimizing applications for performance and scalability.",
        "Collaborating with backend developers to integrate RESTful APIs.",
        "Managing state using Redux and Context API.",
        "Conducting unit testing with Jest and Cypress.io.",
        "Ensuring cross-browser compatibility and resolving UI/UX bugs.",
        "Participating in code reviews and team discussions.",
      ],
      challenges: [
        "Optimizing large-scale data rendering for performance.",
        "Ensuring seamless integration of Redux state management.",
        "Debugging complex UI issues in different browsers and devices.",
      ],
    },
  },
] as const;

export const projectsData = [
  {
    title: "VidzTube",
    description:
      "Vidztube is a feature-rich video browsing platform built with React and Redux, offering a seamless and optimized user experience.",
    tags: ["React", "Redux", "Tailwind", "CSS", "ContextAPI"],
    imageUrl: vidztubeThumbNail,
    features: [
      "Live YouTube Search with Autocomplete: Users can search for videos with instant suggestions, enhancing usability.",
      "LIVE Chat with Anonymous Mode: Real-time chat with an option for users to stay anonymous.",
      "Shimmer UI Effect: Enhances user experience with smooth loading skeletons.",
      "Infinite Scroll: Enables continuous content browsing without pagination.",
      "Live YouTube Video Feed: Fetches and displays trending or searched videos via the YouTube API.",
      "Advanced State Management with Redux Toolkit: Efficiently manages application state.",
      "Optimized API Calls with Caching: Reduces redundant network requests for better performance."
    ],
    live: "https://vidztube.netlify.app/",
    gitHub: "https://github.com/bhanuprakash026/namaste-youtube"
  },
  {
    title: "NXT Trendz | E-commerce Clone",
    description:
      "A fully functional e-commerce platform with authentication, product listings, and a seamless user experience. Developed with React and REST APIs. \nusername: rahul,  \npassword: rahul@2021",
    tags: ["React", "JavaScript", "CSS", "Bootstrap", "REST API", "Local Storage", "JWT Authentication"],
    imageUrl: nxttrends_thumbnail,
    features: [
      "User Authentication with JWT: Secure login system using JSON Web Tokens.",
      "Product Listing with Filters & Search: Browse products with advanced filtering and search functionality.",
      "Product Detail Page: Displays individual product information, including price and description.",
      "Cart Management: Users can add, remove, and update products in their cart.",
      "Persisted User Sessions: Maintains user login state using local storage.",
      "Responsive UI: Ensures a smooth experience across devices using Bootstrap.",
      "Optimized API Handling: Fetches data efficiently from REST APIs."
    ],
    live: "https://bhanunxttrendz.ccbp.tech/login",
    gitHub: "https://github.com/bhanuprakash026/NxtTrendsCartFeature-4-test-cases-f"
}

] as const;
export const frontendDevelopmentData = [
  "HTML", "CSS", "JavaScript", "React.js", "Redux", "Bootstrap", "TailwindCSS"
]

export const backendDevelopmentData = [
  "Node.js", "Express.js", "MongoDB","Mongoose", "RestfullAPIs"
]

export const toolsAndLibraries = [
  "VS Code", "Cypress", "Postman", "Version Control System"
]





