"use client";

import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiSvelte,
  SiTypescript,
  SiPostgresql,
  SiSolana,
  SiPrisma,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

interface InfoItem {
  fieldName: string;
  fieldValue: string;
}

interface AboutData {
  title: string;
  description: string;
  info: InfoItem[];
}

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
}

interface ExperienceData {
  icon: string;
  title: string;
  description: string;
  items: ExperienceItem[];
}

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
}

interface EducationData {
  icon: string;
  title: string;
  description: string;
  items: EducationItem[];
}

interface SkillItem {
  icon: React.ReactNode;
  name: string;
}

interface SkillsData {
  title: string;
  description: string;
  skillList: SkillItem[];
}

//about data
const about: AboutData = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aut aspernatur veritatis accusantium.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ryan Goh",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+60) 123 669 157",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Malaysian",
    },
    {
      fieldName: "Email",
      fieldValue: "ryangohce@gmail.com",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Malay, Mandarin",
    },
  ],
};

//experience data
const experience: ExperienceData = {
  icon: "/assets/resume/icons/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aut aspernatur veritatis accusantium.",
  items: [
    {
      company: "NEXT Academy",
      position: "Full Stack Developer & Mentor",
      duration: "April 2023 - February 2024",
    },
  ],
};

//education data
const education: EducationData = {
  icon: "/assets/resume/icons/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aut aspernatur veritatis accusantium.",
  items: [
    {
      institution: "NEXT Academy",
      degree: "Full-Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "NEXT Academy",
      degree: "Digital Marketing Quantum Degree",
      duration: "2022",
    },
    {
      institution: "University of Colorado Boulder",
      degree: "BSc Mechanical Engineering",
      duration: "2015 - 2019",
    },
  ],
};

//skills data
const skills: SkillsData = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aut aspernatur veritatis accusantium.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiSvelte />,
      name: "svelte",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiPostgresql />,
      name: "postgresql",
    },
    {
      icon: <SiPrisma />,
      name: "prisma",
    },
    {
      icon: <SiSolana />,
      name: "@solana/web3.js",
    },
  ],
};

const Resume: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transitionall duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl flex-shrink-0">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
