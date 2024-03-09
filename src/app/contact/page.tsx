import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

function Contact() {
  return (
    <div className="m-12 lg:m-8 max-w-screen-md">
     <div className="lg:mt-36">
        <p className="font-thin  text-sm tracking-widest">GET IN TOUCH</p>
        <h2 className="font-bold text-lg mt-6 tracking-widest">CONTACT</h2>
      </div>
      <section className="lg:mt-10 lg:block  ">
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex items-center gap-6">
            <div className="h-28 w-28 bg-[#f2f3f7] flex items-center justify-center">
              <Linkedin size={48} className="text-blue-500 text-sm " />
            </div>
            <p className="text-blue-500 font-semibold cursor-pointer"><a target="_blank" href="https://www.linkedin.com/in/abhishek-hadimani/">LinkedIn/Abhishek</a></p>
          </div>
          <div className="flex items-center gap-6"  >
            <div className="h-28 w-28 bg-[#f2f3f7] flex items-center justify-center">
              <Github size={48} className="text-blue-500 text-sm " />
            </div>
            <p className="text-blue-500 font-semibold cursor-pointer"><a target="_blank" href="https://github.com/4bhish">Github/Abhishek</a></p>
          </div>
          <div className="flex items-center gap-6"  >
            <div className="h-28 w-28 bg-[#f2f3f7] flex items-center justify-center">
              <Mail size={48} className="text-blue-500 text-sm " />
            </div>
            <p className="text-blue-500 font-semibold cursor-pointer"><a target="_blank" href="mailto:abhihadimani143@gmail.com">Gmail/Abhishek</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
