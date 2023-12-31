"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { BiChevronRight } from "react-icons/bi";

const navbarMenu = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About Us",
  },
  {
    href: "#",
    label: "Our Services",
  },
  {
    href: "#",
    label: "The Team",
  },
  {
    href: "#",
    label: "Contact",
  },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const mobileMenuhandler = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <header className="py-7">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <h1 className="font-bold text-3xl">In Life</h1>
              </Link>
            </div>
            {/* Navbar menu */}
            <div className="hidden lg:block items-center">
              <ul className="flex space-x-7">
                {navbarMenu.map((item, idx) => (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <button className="block lg:hidden" onClick={mobileMenuhandler}>
                <HiBars3 className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* mobile */}
      <div
        className={
          navOpen
            ? "py-0 block fixed w-screen z-{9999]"
            : "py-0 hidden fixed w-screen z-{9999]"
        }
      >
        <div
          className="h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50"
          onClick={mobileMenuhandler}
        ></div>
        <div className="bg-white w-[380px] top-0 right-0 z-[9999] h-screen fixed">
          <div className="h-14 px-10 border-b flex items-center">
            <button
              className="flex item-center space-x-3 "
              onClick={mobileMenuhandler}
            >
              <GrClose />
            </button>
          </div>
          <div className="h-full py-3 px-10 pb-20 overflow-y-scroll scroll-smooth">
            <ul className="block mb-7">
              {navbarMenu.map((item, idx) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-primary"
                  >
                    <span>{item.label}</span>
                    <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                      <BiChevronRight className="text-xl" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
