import { PencilLine, StepBack } from "lucide-react";
import React from "react";

function Experiance() {
  return (
    <div className="m-12 lg:m-8 max-w-screen-md ">
      <div className="lg:mt-36">
        <p className="font-thin  text-sm tracking-widest">EXPERIANCE</p>
        <h2 className="font-bold text-lg mt-6 tracking-widest">WORK EXPERIANCE</h2>
      </div>
      <section  className="lg:mt-10 lg:block">
        <div className="w-full  lg:flex gap-4 justify-evenly">
          <div className="text-[#2c98f0] my-4  lg:my-0">
            <PencilLine />
          </div>
          <div>
            <div className="bg-[#f2f3f7] p-5">
              <h2 className="text-2xl mt-2 ">
                <span className="font-semibold">
                  Frontend Developer at{" "}
                  <a
                    target="_blank"
                    href="http://www.baws.in"
                    className="cursor-pointer text-[#2c98f0]"
                  >
                    BAWS.in
                  </a>
                </span>{" "}
                <span className="text-[#a7a8ab] text-base ">
                  Jan-2024 - April-2024
                </span>
              </h2>
              <article className="mt-6">
                <li className="mt-2">
                  During my four-month internship at BAWS.in as a React
                  Developer, I actively contributed to the development of
                  responsive and dynamic user interfaces for web applications.
                </li>   
                <li className="mt-2">
                  Collaborating closely with the development team, I engaged in
                  the entire software development lifecycle with version control
                  of Git and Github, from requirement analysis to implementation
                  and testing. I adeptly utilized React.js to build frontend
                  components while ensuring seamless integration of firebase for
                  database management.
                </li>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experiance;