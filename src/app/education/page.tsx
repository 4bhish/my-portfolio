"use client";

import React, { useState } from "react";
import Accordion from "@/components/Accordion";

type EducationItem = {
  id: number;
  title: string;
  description: string;
};

const arrEd: EducationItem[] = [
  {
    id: 1,
    title: "Diploma in Computer Technology",
    description:
      "I completed a three-year Diploma in Computer Technology in 2018 from Solapur Education Society's Polytechnic, affiliated with the Maharashtra State Board of Technical Education (MSBTE). The diploma program provided comprehensive training in various aspects of computer technology, including programming languages, software development, networking, and system administration.",
  },
  {
    id: 2,
    title: "Secondary School Certificate (SSC)",
    description:
      "I completed my Secondary School Certificate (SSC) examination in 2015 from Annappa Kadadi High School, located in Solapur, Maharashtra, India. The examination was conducted by the Maharashtra State Board of Secondary and Higher Secondary Education, commonly known as the Pune Board. ",
  },
 
];

function Education() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(1);

  const handleAccordionClick = (id: number) => {
    setActiveAccordion(id === activeAccordion ? null : id);
  };

  return (
    <div className="m-12 lg:m-8 max-w-screen-md">
      <div className="lg:mt-36">
        <p className="font-thin  text-sm tracking-widest">EDUCATION</p>
        <h2 className="font-bold text-lg mt-6 tracking-widest">EDUCATION</h2>
      </div>
      <section className="lg:mt-10 lg:block  ">
        <div className="container mx-auto p-4">
          {arrEd.map((item) => (
            <Accordion
              key={item.id}
              title={item.title}
              isActive={activeAccordion === item.id}
              onAccordionClick={() => handleAccordionClick(item.id)}
            >
              {item.description}
            </Accordion>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Education;
