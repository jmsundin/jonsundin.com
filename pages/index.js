import Link from "next/link";

function HomePage() {
  return (
    <div className="flex text-gray-200 text-base font-medium flex flex-col gap-8 mx-auto p-5 sm:5/6 md:w-4/5">
      <div className="flex flex-row gap-8">
        <div className="flex flex-col flex-1 gap-8 sm:flex-row sm:flex-1">
          {/* Intro and About Me */}
          <section className="flex flex-1 flex-col gap-2">
            <h1 className="text-xl text-center">Welcome!</h1>
            <span className="bg-gradient-to-r from-gray-500 to-white h-0.5 w-5/6"></span>
            <div className="flex flex-1 flex-col gap-8">
              <article className="flex mt-4 p-2 relative before:absolute before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-gray-500 before:to-white">
                {" "}
                <p className="flex ml-4">
                  Hi there! I am a full-stack software engineer, with a focus on
                  frontend development. I love to build things, and I love to
                  learn and apply what I learn.
                </p>
              </article>

              <article className="flex p-2 relative before:absolute before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-gray-500 before:to-white">
                {" "}
                <p className="flex ml-4">
                  I currently work as an individual contributor with Tangible AI
                  and Subthought LLC. I completed my Masters of Science in
                  Software Engineering in 2022 at California State University,
                  Fullerton.
                </p>
              </article>
            </div>
          </section>
          <div className="flex flex-col flex-1 gap-4">
            <section className="flex flex-col gap-2 sm:flex-1">
              <h2 className="text-xl text-center">Skills</h2>
              <span className="bg-gradient-to-r from-gray-500 to-white h-0.5 w-5/6 mx-auto"></span>
              <div className="flex gap-2">
                <article className="flex flex-col flex-1 gap-2 bg-inherit text-gray-200 p-4">
                  <h3 className="text-lg text-center">Frontend</h3>
                  <ul className="flex flex-col gap-2 text-center text-sm">
                    <li>React.js</li>
                    <li>Next.js</li>
                    <Link href="/about-me-with-d3">
                      <li>D3.js</li>
                    </Link>
                    <li>Tailwind CSS</li>
                  </ul>
                </article>
                <article className="flex flex-col flex-1 gap-2 bg-inherit text-gray-200 p-4">
                  <h3 className="text-lg text-center">Backend</h3>
                  <ul className="flex flex-col gap-2 text-center text-sm">
                    <li>Node.js</li>
                    <li>Firebase</li>
                    <li>Vercel</li>
                  </ul>
                </article>
                <article className="flex flex-col flex-1 gap-2 bg-inherit text-gray-200 p-4">
                  <h3 className="text-lg text-center">Languages</h3>
                  <ul className="flex flex-col gap-2 text-center text-sm">
                    <li>JavaScript</li>
                    <li>Python</li>
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
    </div>
  );
}

export default HomePage;
