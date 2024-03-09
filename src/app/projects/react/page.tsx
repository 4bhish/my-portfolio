import {  MessageSquareText, ShoppingCart } from "lucide-react";

function ReactProjects() {
  return (
    <div className="lg:mt-20 mt-10 flex lg:flex-row flex-col gap-8">
      <div className="relative  cursor-pointer lg:w-2/5 h-60 bg-[#2fa499] flex items-center justify-center">
        <img
          className="w-2/4 "
          src="https://www.svgrepo.com/show/513545/shopping-bag.svg"
        />
        <div className="absolute lg:bg-blue-500 inset-0 flex items-center justify-center opacity-100 lg:opacity-0 lg:hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-0 left-0  m-4">
            <p className="text-white text-md ">E-Commerce Website</p>
            <ShoppingCart className="text-white mt-2" />
          </div>
        </div>
      </div>
      <div className="relative  cursor-pointer lg:w-2/5 h-60 bg-[#45aac2] flex items-center justify-center">
        <img
          className="w-2/4 "
          src="https://www.svgrepo.com/show/513468/macbook-pro.svg"
        />
        <div className="absolute lg:bg-blue-500 inset-0 flex items-center justify-center opacity-100 lg:opacity-0 lg:hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-0 left-0  m-4">
            <p className="text-white text-md ">Social Media Website</p>
            <MessageSquareText className="text-white mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactProjects;
