import { BedDouble, CircleUser, MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function Projects() {
  return (
    <div className="lg:mt-20 mt-10 flex lg:flex-row flex-col gap-8">
      <div className="relative  cursor-pointer lg:w-2/5 h-60 bg-[#fae154] flex items-center justify-center">
        <img
          className="w-2/4 "
          src="https://www.svgrepo.com/show/476882/hotel-information.svg"
        />
        <div className="absolute lg:bg-blue-500 inset-0 flex items-center justify-center opacity-100 lg:opacity-0 lg:hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-0 left-0  m-4">
            <p className="text-black lg:text-white text-md ">
              <Link target="_blank" href={"https://booking-clone-beige.vercel.app/"}>Booking Clone <MoveRight /></Link>
            </p>
            <p className="text-black lg:text-white mt-2"><Link target="_blank" href={"https://github.com/4bhish/booking-clone"}>Source Code</Link></p>
            <BedDouble className="text-black lg:text-white mt-2" />
          </div>
        </div>
      </div>
      <div className="relative  cursor-pointer lg:w-2/5 h-60 bg-[#eb3c2a] flex items-center justify-center">
        <img
          className="w-2/4 "
          src="https://www.svgrepo.com/show/202977/portfolio-bag.svg"
        />
        <div className="absolute lg:bg-blue-500 inset-0 flex items-center justify-center opacity-100 lg:opacity-0 lg:hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-0 left-0  m-4">
            <p className="text-white text-md ">Portfolio <MoveRight /></p>
            <p className="text-white mt-2"><Link target="_blank" href={"https://github.com/4bhish/my-portfolio"}>Source Code</Link></p>
            <CircleUser className="text-white mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
