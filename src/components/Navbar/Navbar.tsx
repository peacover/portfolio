"use client";

import { NavbarItems } from "@/constants/navbar";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import light_logo from "../../../public/Logos/light_logo.svg";
import dark_logo from "../../../public/Logos/dark_logo.svg";

import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <></>;
  return (
    <div className="py-2 px-4 md:px-8 fixed top-0 left-0 right-0 z-10 backdrop-blur-lg">
      <div className="flex justify-between items-center md:px-4">
        <Link href="/">
          <Image
            src={theme === "dark" ? dark_logo : light_logo}
            alt="Peacover Logo"
            width="0"
            height="0"
            sizes="100vw"
            className="w-auto h-[5rem] min-h-10"
            priority={true}
          />
        </Link>
        <div
          className={cn(
            "flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0",
            isNavbarOpen ? "p-12 lg:p-0 block" : "hidden"
          )}
        >
          <ul className="h-screen flex flex-col items-center justify-center lg:h-0 lg:flex-row">
            {NavbarItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-xl py-2 text-center border-b-2 hover:bg-secondary lg:border-b-0 lg:px-6"
                >
                  <Link
                    className="text-lg px-8"
                    href={item.path}
                    legacyBehavior
                    passHref
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            size={"lg"}
            className="hidden md:block md:text-md md:rounded-2xl"
            onClick={(e) => e.preventDefault()}
          >
            <Link href="/contact" legacyBehavior passHref>
              Contact
            </Link>
          </Button>
          <ModeToggle />
          <div className="lg:hidden">
            <Button
              onClick={() => setIsNavbarOpen(!isNavbarOpen)}
              size="icon"
              variant="outline"
              className="rounded-full"
            >
              {isNavbarOpen ? (
                <Icon icon="eva:close-fill" width={30} height={30} />
              ) : (
                <Icon icon="eva:menu-fill" width={30} height={30} />
              )}
            </Button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

<div>
  <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
    <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
      <div>
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          {/* LOGO */}
          <Link href="/">
            <h2 className="text-2xl text-cyan-600 font-bold ">LOGO</h2>
          </Link>
          {/* HAMBURGER BUTTON FOR MOBILE */}
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              // onClick={() => setNavbar(!navbar)}
            >
              {/* {navbar ? (
                <Image src="/close.svg" width={30} height={30} alt="logo" />
              ) : (
                <Image
                  src="/hamburger-menu.svg"
                  width={30}
                  height={30}
                  alt="logo"
                  className="focus:border-none active:border-none"
                />
              )} */}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
        // className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
        //   navbar ? "p-12 md:p-0 block" : "hidden"
        // }`}
        >
          <ul className="h-screen md:h-auto items-center justify-center md:flex ">
            <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
              {/* <Link href="#about" onClick={() => setNavbar(!navbar)}>
                About
              </Link> */}
            </li>
            <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
              {/* <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                Blogs
              </Link> */}
            </li>
            <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
              {/* <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                Contact
              </Link> */}
            </li>
            <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
              {/* <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                Projects
              </Link> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</div>;

export default Navbar;
