"use client";

import { Fragment, useRef, useState } from "react";

import Link from "next/link";

import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navComponents = [
  {
    title: "D3.js",
    description: "About Me through Information Visualization",
    href: "/about-me-with-d3",
  },
  // {
  //   title: "Resume",
  //   description: "My Resume",
  //   href: "/resume",
  // },
  // {
  //   title: "Personal Projects",
  //   description: "My Personal Projects",
  //   href: "/personal-projects",
  // },
  // {
  //   title: "Professional Projects",
  //   description: "My Professional Projects",
  //   href: "/professional-projects",
  // },
];

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const modalRef = useRef(null);

  const showModalMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      return;
    }
    setIsMenuOpen(true);
  };

  return (
    <Fragment>
      <div className="flex flex-row p-2 justify-between items-center">
        <div className="flex flex-row items-center">
          <h1 className="text-3xl text-white font-bold hover:text-indigo-200 cursor-pointer tracking-tight lg:text-4xl">
            <Link href="/" className="flex flex-initial items-start p-3">
              Jon Sundin
            </Link>
          </h1>
        </div>
        <NavigationMenu className="hidden sm:inline-block sm:mx-auto sm:my-2 sm:p-2">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {navComponents.map((component) => (
                    <li key={component.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={component.href}
                          className="flex h-full w-full select-none flex-col justify-end rounded-md hover:bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 text-lg font-medium">
                            {component.title}
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            {component.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Social Media Links */}
        <div className="flex flex-row p-3 gap-5 text-white text-base sm:text-2xl">
          <Link
            href="https://www.linkedin.com/in/jonsundin/"
            target="_blank"
            className="flex flex-1"
          >
            <span className="text-white hover:text-indigo-200">
              <BsLinkedin />
            </span>
          </Link>{" "}
          <Link
            href="https://www.twitter.com/jonsundin/"
            target="_blank"
            className="flex flex-1"
          >
            <span className="text-white hover:text-indigo-200">
              <BsTwitter />
            </span>
          </Link>{" "}
          <Link
            href="https://github.com/jmsundin"
            target="_blank"
            className="flex flex-1"
          >
            <span className="text-white hover:text-indigo-200">
              <BsGithub />
            </span>
          </Link>{" "}
        </div>

        {/* Mobile Menu */}
        {!isMenuOpen && (
          <RiMenu3Line
            className="relative text-white text-3xl cursor-pointer hover:fill-indigo-200 sm:hidden"
            onClick={showModalMenu}
          />
        )}
        {isMenuOpen && (
          <div
            ref={modalRef}
            className="absolute top-0 right-0 z-50 flex flex-col w-full h-full p-2 bg-gradient-to-r from-indigo-950 to-indigo-500"
          >
            <div className="flex flex-row justify-end">
              <RiCloseLine
                className="flex flex-row text-white text-4xl cursor-pointer hover:fill-indigo-200 sm:hidden"
                onClick={showModalMenu}
              />
            </div>
            <div
              className="flex flex-row w-full justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex flex-col w-1/2 justify-center items-center gap-4">
                <Link href="/" legacyBehavior passHref>
                  <p className="font-bold text-2xl text-white p-2 cursor-pointer hover:text-indigo-200 ">
                    Home
                  </p>
                </Link>
                <Link href="/about-me-with-d3" legacyBehavior passHref>
                  <p className="font-bold text-2xl text-white p-2 cursor-pointer hover:text-indigo-200">
                    About Me
                  </p>
                </Link>
                <Link href="/contact" legacyBehavior passHref className="">
                  <p className="font-bold text-2xl text-white p-2 cursor-pointer hover:text-indigo-200">
                    Contact
                  </p>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}
