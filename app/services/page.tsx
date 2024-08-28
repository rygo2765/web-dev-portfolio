"use client";

import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServicesItem {
  num: string;
  title: string;
  description: string;
  href: string;
}

const services: ServicesItem[] = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod asperiores.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod asperiores.",
    href: "",
  },
  {
    num: "03",
    title: "Digital Marketing",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod asperiores.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod asperiores.",
    href: "",
  },
];

const Services: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex flex-col jusitfy-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/* top */}
                <div>
                  <div>{service.num}</div>
                  <Link href={service.href}>
                    <BsArrowDownRight />
                  </Link>
                </div>
                {/* title */}
                <h2>{service.title}</h2>
                {/* description */}
                <p>{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
