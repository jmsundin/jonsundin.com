function HomePage() {
  return (
    <div className="flex flex-col gap-8 mx-auto p-5">
      <h1 className="text-gray-200 text-5xl mx-auto">Welcome!</h1>
      {/* <span className="bg-gradient-to-r from-gray-500 to-gray-200 h-0.5 w-5/6 mx-auto"></span> */}

      <div className="sm:flex sm:flex-row">
        {/* Intro and About Me */}
        <div className="flex flex-col sm:flex-1 gap-8 text-gray-200 text-base md:text-xl">
          <div className="relative before:absolute before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-gray-500 before:to-gray-200">
            {" "}
            <p className="ml-4">
              My name is Jon Sundin. I am a full-stack software engineer, with a
              focus in frontend development. I live in Culver City, CA. I love
              to build things, and I love to learn and apply what I learn --
              this is what I love.
            </p>
          </div>

          <div className="relative before:absolute before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-gray-500 before:to-gray-200">
            {" "}
            <p className="ml-4">
              I currently work as an individual contributor with Tangible AI and
              Subthought LLC. I completed my Masters of Science in Software
              Engineering in 2022 at California State University, Fullerton.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col sm:flex-1 gap-8 text-gray-200 text-base md:text-xl">
          <div className="relative ml-4 flex flex-col gap-2">
            <h2 className="text-xl text-center">Skills</h2>
            <span className="bg-gradient-to-r from-gray-500 to-gray-200 h-0.5 w-5/6 mx-auto"></span>
            <ul className="grid grid-rows-2 grid-cols-3 sm:grid-rows-3 sm:grid-cols-2 gap-2 text-center">
              <li>React.js</li>
              <li>Next.js</li>
              <li>D3.js</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
              <li>Python</li>
              <li>Express.js</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
