import Link from "next/link";
import Head from "next/head";
import { Fragment } from "react";
import Image from "next/image";

import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import D3Icon from "@/assets/icons/d3js.svg";

import { RiJavascriptFill } from "react-icons/ri";
import { SiPython } from "react-icons/si";
import { RiHtml5Fill } from "react-icons/ri";
import { RiCss3Fill } from "react-icons/ri";


function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Jon Sundin | Frontend Web Developer | UI/UX Designer</title>
        <meta
          name="description"
          content="Jon Sundin | Frontend Web Developer | UI/UX Designer | React, Next.js, D3.js"
        />
      </Head>
      <div className="flex text-gray-200 text-base font-medium px-4 mx-auto max-w-sm">
        <div className="flex flex-col gap-2">
          <section className="flex flex-col gap-2">
            <h1 className="text-xl text-center">Hi there!</h1>
            <span className="-mt-1 mx-4 bg-gradient-to-r from-gray-500 to-white h-0.5"></span>
            <div className="flex flex-col gap-4 mt-2">
              <article
                className="flex pl-2 relative before:absolute before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-gray-500 before:to-white"
                aria-label="About Me"
              >
                {" "}
                <p className="flex text-sm ml-4">
                  My name is Jon. I am a frontend web developer passionate about
                  designing user interfaces with the user&apos;s experience in
                  mind to help achieve intuitive interaction with information.
                </p>
              </article>

              <article className="flex pl-2 relative before:absolute before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-gray-500 before:to-white">
                {" "}
                <p className="flex ml-4"></p>
              </article>
            </div>
          </section>
          <div className="flex flex-col gap-6">
            <section className="flex flex-col gap-2">
              <h2 className="text-xl text-center">Tools</h2>
              <div className="flex flex-row gap-2">
                <article className="flex-1 text-gray-200 px-2 border rounded-lg border-solid border-slate-200 ">
                  <ul className="flex flex-col justify-evently text-sm text-center divide-y divide-dotted divide-slate-500">
                    <li className="flex gap-2 justify-center py-2">
                      <GrReactjs className="flex-none shrink w-6 h-6" />
                      <span>React</span>
                    </li>
                    <li className="flex gap-2 justify-center shrink py-2">
                      <TbBrandNextjs className="inline-block w-6 h-6" />
                      <span>Next.js</span>
                    </li>
                    <Link href="/about-me-with-d3">
                      <li className="flex gap-2 justify-center shrink py-2">
                        <Image
                          src={D3Icon}
                          width={20}
                          height={20}
                          className="shrink w-5 h-5"
                          alt="D3 Icon"
                        />
                        <span>D3.js</span>
                      </li>
                    </Link>
                    <li className="flex gap-2 justify-center shrink py-2">
                      <SiTailwindcss className="shrink w-6 h-6" />
                      <span>Tailwind CSS</span>
                    </li>
                  </ul>
                </article>
                <article className="flex-1 text-gray-200 px-2 border rounded-lg border-solid border-slate-200">
                  <ul className="flex flex-col justify-evenly text-sm text-center divide-y divide-dotted divide-slate-500">
                    <li className="flex gap-2 justify-center py-2">
                      <RiJavascriptFill className="shrink w-6 h-6"/><span>JavaScript</span></li>
                    <li className="flex gap-2 justify-center py-2">
                      <SiPython className="shrink w-6 h-6"/><span>Python</span></li>
                    <li className="flex gap-2 justify-center py-2">
                      <RiHtml5Fill className="shrink w-6 h-6"/><span>HTML</span></li>
                    <li className="flex gap-2 justify-center py-2">
                      <RiCss3Fill className="shrink w-6 h-6"/><span>CSS</span></li>
                  </ul>
                </article>
              </div>
            </section>
            <section className="flex flex-col gap-2">
              <h2 className="text-xl text-center">Personal Projects</h2>
              <span className="bg-gradient-to-r from-gray-500 to-white h-0.5 w-5/6 mx-auto"></span>
              <article className="flex flex-col flex-1 gap-2 bg-inherit text-gray-200 p-4">
                <ul className="flex flex-row gap-2 text-center text-sm">
                  <li>
                    <Link href="https://infoverse.ai" target="_blank">
                      <span className="text-base font-bold">Infoverse AI</span>:
                      <p>
                        Visualizing the world&apos;s information as a network
                        graph.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://quoted-five.vercel.app/"
                      target="_blank"
                    >
                      <span className="text-base font-bold">Quoted!</span>:
                      <p>A social network to share quotes.</p>
                    </Link>
                  </li>
                </ul>
              </article>
            </section>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default HomePage;
