import { Cake, Coins } from 'lucide-react';
import React from 'react';

function Vanilla() {
  return (
    <div className="lg:mt-20 mt-10 flex lg:flex-row flex-col gap-8">
      <div className="relative  cursor-pointer lg:w-2/5 h-60 bg-[#a84cb8] flex items-center justify-center">
        <img
          className="w-2/4 "
          src="https://www.svgrepo.com/show/530475/cash.svg"
        />
        <div className="absolute lg:bg-blue-500 inset-0 flex items-center justify-center opacity-100 lg:opacity-0 lg:hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-0 left-0  m-4">
            <p className="text-white text-md ">Cash Register App</p>
            <Coins className="text-white mt-2" />
          </div>
        </div>
      </div>
      <div className="relative  cursor-pointer lg:w-2/5 h-60 bg-[#4054b2] flex items-center justify-center">
        <img
          className="w-2/4 "
          src="https://www.svgrepo.com/show/489881/birthday-cake.svg"
        />
        <div className="absolute lg:bg-blue-500 inset-0 flex items-center justify-center opacity-100 lg:opacity-0 lg:hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-0 left-0  m-4">
            <p className="text-white text-md ">Palindrome Birthday</p>
            
            <Cake className="text-white mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vanilla;
