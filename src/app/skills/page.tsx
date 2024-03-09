import React from "react";

function Skills() {
  return (
    <div className="m-12 lg:m-8 max-w-screen-md">
      <div className="lg:mt-36">
        <p className="font-thin  text-sm tracking-widest">MY SPECIALTY</p>
        <h2 className="font-bold text-lg mt-6 tracking-widest">MY SKILLS</h2>
      </div>
      <section className="mt-10 ">
        <article className="mt-6">
          In the ever-evolving world of web development, I've become a navigator
          of digital realms. Armed with HTML5, CSS, and JavaScript, I craft
          immersive experiences, while React and Next.js breathe life into
          dynamic interfaces. Node.js forms the bedrock of my backend prowess,
          ensuring reliability at every turn. With Git and GitHub, version
          control becomes second nature, harmonizing collaborative efforts
          effortlessly.
        </article>
      </section>
      <div className="mt-12 lg:grid grid-rows-4 grid-flow-col gap-8">
        <div className="lg:w-4/5 mb-5 lg:mb:0">
          <div className="flex justify-between">
            <p className="font-medium text-blue-500">HTML5</p>
            <p className="font-medium text-blue-500">90%</p>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-xl overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all"
              style={{ width: `90%` }}
            ></div>
          </div>
        </div>
        <div className="lg:w-4/5 mb-5 lg:mb:0 ">
          <div className="flex justify-between">
            <p className="font-medium text-[#ec5453]">Javascript</p>
            <p className="font-medium text-[#ec5453]">85%</p>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-xl overflow-hidden">
            <div
              className="h-full bg-[#ec5453] transition-all"
              style={{ width: `85%` }}
            ></div>
          </div>
        </div>
        <div className="lg:w-4/5 mb-5 lg:mb:0 ">
          <div className="flex justify-between">
            <p className="font-medium text-[#f9bf3f]">CSS</p>
            <p className="font-medium text-[#f9bf3f]">90%</p>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-xl overflow-hidden">
            <div
              className="h-full bg-[#f9bf3f] transition-all"
              style={{ width: `90%` }}
            ></div>
          </div>
        </div>
        <div className="lg:w-4/5 mb-5 lg:mb:0 ">
          <div className="flex justify-between">
            <p className="font-medium text-[#2fa499]">React</p>
            <p className="font-medium text-[#2fa499]">75%</p>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-xl overflow-hidden">
            <div
              className="h-full bg-[#2fa499] transition-all"
              style={{ width: `75%` }}
            ></div>
          </div>
        </div>
        <div className="lg:w-4/5 mb-5 lg:mb:0 ">
          <div className="flex justify-between">
            <p className="font-medium text-[#a84cb8]">Next.JS</p>
            <p className="font-medium text-[#a84cb8]">70%</p>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-xl overflow-hidden">
            <div
              className="h-full bg-[#a84cb8] transition-all"
              style={{ width: `70%` }}
            ></div>
          </div>
        </div>
        <div className="lg:w-4/5 mb-5 lg:mb:0 ">
          <div className="flex justify-between">
            <p className="font-medium text-[#337ab7]">TailwindCSS</p>
            <p className="font-medium text-[#337ab7]">80%</p>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-xl overflow-hidden">
            <div
              className="h-full bg-[#337ab7] transition-all"
              style={{ width: `80%` }}
            ></div>
          </div>
        </div>
        <div className="lg:w-4/5 mb-5 lg:mb:0 ">
          <div className="flex justify-between">
            <p className="font-medium text-[#3335b7]">NodeJs</p>
            <p className="font-medium text-[#3335b7]">70%</p>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-xl overflow-hidden">
            <div
              className="h-full bg-[#3335b7] transition-all"
              style={{ width: `70%` }}
            ></div>
          </div>
        </div>
        <div className="lg:w-4/5 mb-5 lg:mb:0 ">
          <div className="flex justify-between">
            <p className="font-medium text-[#2c7bb8]">Version Control</p>
            <p className="font-medium text-[#2c7bb8]">70%</p>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-xl overflow-hidden">
            <div
              className="h-full bg-[#2c7bb8] transition-all"
              style={{ width: `70%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
