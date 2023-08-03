"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
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
  {
    title: "Resume",
    description: "My Resume",
    href: "/resume",
  },
  {
    title: "Personal Projects",
    description: "My Personal Projects",
    href: "/personal-projects",
  },
  {
    title: "Professional Projects",
    description: "My Professional Projects",
    href: "/professional-projects",
  },
];

export default function MainNav() {
  return (
    <div className="flex flex-row items-center justify-center w-full px-2">
      <Link href="/" passHref>
        <h1 className="scroll-m-20 text-4xl font-bold hover:font-extrabold tracking-tight lg:text-5xl">
          Jon Sundin
        </h1>
      </Link>
      <NavigationMenu className="mx-auto my-2 p-2 border border-solid-4 border-gray-500 rounded-xl">
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
    </div>
  );
}
