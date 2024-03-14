"use client";

import { Dialog } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function Sidebar() {
  const navOptions = [
    {
      id: 1,
      name: "home",
      href: "/",
    },
    {
      id: 2,
      name: "about",
      href: "/about",
    },
    {
      id: 3,
      name: "skills",
      href: "/skills ",
    },
    {
      id: 4,
      name: "projects",
      href: "/projects ",
    },
    {
      id: 5,
      name: "education",
      href: "/education ",
    },
    {
      id: 6,
      name: "experience",
      href: "/experience ",
    },
    {
      id: 7,
      name: "blog",
      href: "/blog ",
    },
    {
      id: 8,
      name: "contact",
      href: "/contact ",
    },
  ];

  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className=" hidden lg:w-1/5 bg-[#f2f3f7] m-0 h-screen sticky top-0 left-0  overflow-scroll lg:flex justify-center">
        <div className="my-8 mx-auto p-8 text-center">
          <div className=" mb-4 flex flex-col items-center">
            <img
              className="w-4/5 h-4/5 rounded-full object-contain"
              src="https://media.licdn.com/dms/image/D5603AQHPsvfQreBmyw/profile-displayphoto-shrink_400_400/0/1670098439955?e=1714608000&v=beta&t=U9hRLktgletKCP5_7Cc8oTqrQlKseEAciy6Hq6j8uOc"
              alt="pfp"
            />
            <h3 className="pt-6 pb-3 text-2xl font-semibold">
              Abhishek Hadimani
            </h3>
            <p className="uppercase text-sm tracking-wide ">
              <span className="text-blue-500  cursor-pointer">
                Web Developer
              </span>{" "}
              in India
            </p>
          </div>
          <div className="flex flex-col">
            {navOptions.map((menu) => {
              const isActive = pathname.startsWith(`/${menu.name}`);

              return (
                <div className="mb-4" key={menu.id}>
                  <Link
                    className={`text-sm inline border-b-2 border-[#f2f3f7] uppercase transition-all     hover:border-b-2 hover:border-b-blue-500 ${
                      isActive
                        ? "border-b-blue-500 text-blue-500"
                        : pathname === "/" && menu.name === "home"
                        ? "border-b-blue-500"
                        : ""
                    }`}
                    href={menu.href}
                  >
                    {menu.name}
                  </Link>
                </div>
              );
            })}
            <div className="mt-4">
              <p className="text-sm font-thin">
                © Copyright 2024 All rights reserved | This Portofolio is made
                with <span className="text-blue-500">&#x2764;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`relative ${mobileMenuOpen && 'hidden'}  lg:hidden`}>
        <button
          type="button"
          className=" rounded-md z-50  fixed right-0 top-0 p-8"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Close menu</span>
          <Menu
            className={`h-8 w-8  ${
              pathname === "/" ? "text-white" : "text-black"
            }`}
            aria-hidden="true"
          />
        </button>
      </div>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed  inset-0 z-10" />

        <Dialog.Panel className="fixed  inset-y-0 right-0 z-10 w-full overflow-y-auto  sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className=" lg:w-1/5 bg-[#f2f3f7] m-0 h-screen sticky top-0 left-0  overflow-scroll lg:flex justify-center">
            <button
              type="button"
              className=" rounded-md  absolute right-0 top-0 p-8 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-8 w-8 text-black" aria-hidden="true" />
            </button>
            <div className="my-8 mx-auto p-8 text-center">
              <div className=" mb-4 flex flex-col items-center">
                <img
                  className="w-2/4 h-2/4 rounded-full object-contain"
                  src="https://media.licdn.com/dms/image/D5603AQHPsvfQreBmyw/profile-displayphoto-shrink_400_400/0/1670098439955?e=1714608000&v=beta&t=U9hRLktgletKCP5_7Cc8oTqrQlKseEAciy6Hq6j8uOc"
                  alt="pfp"
                />
                <h3 className="pt-6 pb-3 text-2xl font-semibold">
                  Abhishek Hadimani
                </h3>
                <p className="uppercase text-sm tracking-wide ">
                  <span className="text-blue-500  cursor-pointer">
                    Web Developer
                  </span>{" "}
                  in India
                </p>
              </div>
              <div className="flex flex-col">
                {navOptions.map((menu) => {
                  const isActive = pathname.startsWith(`/${menu.name}`);

                  return (
                    <div className="mb-4" key={menu.id}>
                      <Link
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-sm inline border-b-2 border-[#f2f3f7] uppercase transition-all     hover:border-b-2 hover:border-b-blue-500 ${
                          isActive
                            ? "border-b-blue-500 text-blue-500"
                            : pathname === "/" && menu.name === "home"
                            ? "border-b-blue-500"
                            : ""
                        }`}
                        href={menu.href}
                      >
                        {menu.name}
                      </Link>
                    </div>
                  );
                })}
                <div className="mt-4">
                  <p className="text-sm font-thin">
                    © Copyright 2024 All rights reserved | This Portofolio is
                    made with <span className="text-blue-500">&#x2764;</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}

export default Sidebar;
