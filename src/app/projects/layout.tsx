"use client";

import { Metadata } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";



function projectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  
  const linksArr = [
    {
      id: 1,
      href: "",
      name: "Next.JS",
    },
    {
      id: 2,
      href: "react",
      name: "React.JS",
    },
    {
      id: 1,
      href: "vanilla",
      name: "Vanilla.JS",
    },
  ];
  return (
    <div className="m-12 lg:m-8 max-w-screen-md">
      <div className="lg:mt-36">
        <p className="font-thin  text-sm tracking-widest">MY PROJECTS</p>
        <h2 className="font-bold text-lg mt-6 tracking-widest">
          PROJECTS ON WHICH I HAVE WORKED
        </h2>
      </div>
      <section className="lg:mt-10 lg:block  ">
        <div className="flex lg:gap-40 justify-between lg:mt-0 mt-4">
          {linksArr.map((link) => {
             const isActive = link.href !== "" ?
             pathname.endsWith(`/projects/${link.href}`) :
             pathname.endsWith('/projects');
            return (
              <div key={link.id}>
                <Link className={`${isActive && 'text-blue-500' }`} href={`/projects/${link.href}`}>{link.name}</Link>
              </div>
            );
          })}
        </div>
        {children}
      </section>
    </div>
  );
}

export default projectsLayout;
