import { Brain, FileBarChart2, Paintbrush2 } from "lucide-react";
import React from "react";

function About() {
  return (
    <div className="m-12 max-w-screen-md">
      <div className="lg:mt-36">
        <p className="font-thin  text-sm tracking-widest ">ABOUT ME</p>
        <h2 className="font-bold text-lg mt-6 tracking-widest">WHO AM I ?</h2>
      </div>
      <section className="lg:mt-10 mt-5  lg:block  ">
        <article>
          <span className="font-bold">Hi I'm Abhishek Hadimani,</span> a
          passionate web developer with a love for crafting innovative online
          experiences. My journey into the world of web development began with a
          curiosity for how things work and a desire to bring ideas to life in
          the digital space. Over the years, I've honed my skills in Frontend
          Development, mastering languages like HTML, CSS,
          JavaScript, and frameworks like React , Node.js and tailwindCSS along the way.
        </article>
        <article className="mt-6">
          Beyond the code, I'm a firm believer in the power of collaboration and
          communication. I love working closely with clients to understand their
          unique needs and vision, transforming their ideas into digital
          masterpieces that resonate with their audience and drive meaningful
          results.
        </article>
      </section>
      <div className="flex items-center justify-center lg:flex-row flex-col gap-8  mt-10">
        <div className="shadow-2xl w-56  h-40 bg-[#fff] border-b-4 border-b-blue-500 flex justify-center items-center">
          <div className="mr-4">
            <FileBarChart2 className="text-blue-500" />
          </div>
          <p className="font-bold">HTML5</p>
        </div>
        <div className="shadow-2xl w-56  h-40 bg-[#fff] border-b-4 border-b-[#ec5453] flex justify-center items-center">
          <div className="mr-4">
            <Brain className="text-[#ec5453]" />
          </div>
          <p className="font-bold">JAVASCRIPT</p>
        </div>
        <div className="shadow-2xl w-56  h-40 bg-[#fff] border-b-4 border-b-[#f9bf3f] flex justify-center items-center">
          <div className="mr-4">
          <Paintbrush2 className="text-[#f9bf3f]" />
          </div>
          <p className="font-bold">CSS</p>
        </div>
      </div>
    </div>
  );
}

export default About;
