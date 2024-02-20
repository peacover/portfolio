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
        {!isNavbarOpen && (
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
        )}
        <div
          className={cn(
            isNavbarOpen
              ? "flex-1 justify-self-center lg:block lg:pb-0 lg:mt-0"
              : "hidden lg:block lg:pb-0 lg:mt-0"
          )}
        >
          <ul className="h-screen flex flex-col justify-center lg:h-0 lg:flex-row lg:items-center">
            {NavbarItems.map((item, index) => {
              return (
                <Link href={item.path} legacyBehavior passHref>
                  <li
                    key={index}
                    className={cn(
                      "text-xl py-5 text-center border-b-2 hover:bg-secondary lg:border-b-0 lg:px-6",
                      index === 0 && isNavbarOpen ? "border-t-2" : ""
                    )}
                  >
                    {item.title}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            size={"lg"}
            className={cn(
              "hidden",
              !isNavbarOpen ? "md:block md:text-md md:rounded-2xl" : "hidden"
            )}
            onClick={(e) => e.preventDefault()}
          >
            <Link href="/contact" legacyBehavior passHref>
              Contact
            </Link>
          </Button>
          {!isNavbarOpen && <ModeToggle />}
          <div
            className={cn(
              "lg:hidden",
              isNavbarOpen ? "bg-black absolute top-10 m-[3rem]" : "block"
            )}
          >
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
      </div>
    </div>
  );
};

export default Navbar;
