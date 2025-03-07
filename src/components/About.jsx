import React from "react";

const About = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      id="about"
      className="p-10 sm:p-20  sm:mt-48 min-h-screen bg-gray-100 "
    >
      <div className="flex flex-col items-center">
        <h1 className="text-black text-2xl sm:text-4xl font-bold ">ABOUT ME</h1>
        <div className="mt-2 w-16 h-[6px] border rounded bg-red-700 mb-1 sm:mb-2"></div>
        <p className="text-gray-500 text-base sm:text-xl mb-8 sm:mb-16 max-w-2xl text-center">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between px-4 gap-8 ">
        <div className="flex flex-col p-0 sm:p-4 md:w-1/2">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-8">
            Get to know me!
          </h2>
          <p className="text-sm sm:text-lg text-gray-500 mb-2 sm:mb-4">
            I'm a Full-Stack Developer proficient in the MERN stack, with
            expertise in C, C++, Java,Tailwind CSS and many more as mentioned in the skills section. I specialize in
            building and managing both the front-end and back-end of web
            applications, ensuring seamless performance and user experience.
            Check out some of my work in the Projects section.
          </p>
          <p className="text-sm sm:text-lg text-gray-500 mb-2 sm:mb-4">
            I am passionate about creating scalable web applications with clean,
            responsive designs. I also enjoy sharing my knowledge and
            experiences in web development to help others in the dev community.
            Feel free to connect with me on LinkedIn, where I share valuable
            insights on web development and programming.
          </p>
          <p className="text-sm sm:text-lg text-gray-500 mb-2 sm:mb-4">
            I'm open to job opportunities where I can contribute, learn, and
            grow. If you have a role that aligns with my skills and experience,
            don’t hesitate to reach out!
          </p>
          <button
            className="bg-pink-700 text-lg w-34 h-12 rounded-lg sm:w-40 sm:h-16 sm:rounded-xl sm:text-xl m-10 text-white hover:bg-pink-800 transition-colors duration-300"
            onClick={scrollToContact}
          >
            CONTACT
          </button>
        </div>
        <div className="p-4 sm:w-1/2">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-8">
            My Skills
          </h2>
          <ul className="flex flex-row flex-wrap gap-3 sm:gap-6 ">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <div className="flex items-center justify-center w-20 h-10 sm:w-24 sm:h-12 p-2 border-2 rounded-lg bg-gray-200 text-gray-700 font-medium text-xs sm:text-base">
                React
              </div>
              <div className="flex items-center justify-center w-20 h-10 sm:w-24 sm:h-12 p-2 border-2 rounded-lg bg-gray-200 text-gray-700 font-medium text-xs sm:text-base">
                Redux
              </div>
              <div className="flex items-center justify-center w-20 h-10 sm:w-24 sm:h-12 p-2 border-2 rounded-lg bg-gray-200 text-gray-700 font-medium text-xs sm:text-base">
                Express.js
              </div>
              <div className="flex items-center justify-center w-20 h-10 sm:w-24 sm:h-12 p-2 border-2 rounded-lg bg-gray-200 text-gray-700 font-medium text-xs sm:text-base">
                Node.js
              </div>
              <div className="flex items-center justify-center w-20 h-10 sm:w-24 sm:h-12 p-2 border-2 rounded-lg bg-gray-200 text-gray-700 font-medium text-xs sm:text-base">
                MongoDB
              </div>
              <div className="flex items-center justify-center w-24 h-10 sm:w-28 sm:h-12 p-2 border-2 rounded-lg bg-gray-200 text-gray-700 font-medium text-xs sm:text-base">
                Tailwind CSS
              </div>
              <div className="flex items-center justify-center w-28 h-10 sm:w-32 sm:h-12 p-2 border-2 rounded-lg bg-gray-200 text-gray-700 font-medium text-xs sm:text-base">
                Restful APIs
              </div>
              <div className="flex items-center justify-center w-28 h-10 sm:w-32 sm:h-12 p-2 border-2 rounded-lg bg-gray-200 text-gray-700 font-medium text-xs sm:text-base">
                JWT Authentication
              </div>
              <div className="flex items-center justify-center w-20 h-10 sm:w-24 sm:h-12 p-2 border-2 rounded-lg bg-gray-200 text-gray-700 font-medium text-xs sm:text-base">
                SQL
              </div>
              <div className="flex items-center justify-center w-24 h-10 sm:w-28 sm:h-12 p-2 border-2 rounded-lg bg-gray-200 text-gray-700 font-medium text-xs sm:text-base">
                Data Structures
              </div>
              <div className="flex items-center justify-center w-16 h-10 sm:w-20 sm:h-12 p-2 border-2 rounded-lg bg-gray-200 text-gray-700 font-medium text-xs sm:text-base">
                C
              </div>
              <div className="flex items-center justify-center w-16 h-10 sm:w-20 sm:h-12 p-2 border-2 rounded-lg bg-gray-200 text-gray-700 font-medium text-xs sm:text-base">
                C++
              </div>
              <div className="flex items-center justify-center w-20 h-10 sm:w-24 sm:h-12 p-2 border-2 rounded-lg bg-gray-200 text-gray-700 font-medium text-xs sm:text-base">
                Java
              </div>
              <div className="flex items-center justify-center w-28 h-10 sm:w-32 sm:h-12 p-2 border-2 rounded-lg bg-gray-200 text-gray-700 font-medium text-xs sm:text-base">
                Python
              </div>
              <div className="flex items-center justify-center w-20 h-10 sm:w-24 sm:h-12 p-2 border-2 rounded-lg bg-gray-200 text-gray-700 font-medium text-xs sm:text-base">
                C#
              </div>
              <div className="flex items-center justify-center w-20 h-10 sm:w-24 sm:h-12 p-2 border-2 rounded-lg bg-gray-200 text-gray-700 font-medium text-xs sm:text-base">
                Git
              </div>
              <div className="flex items-center justify-center w-24 h-10 sm:w-28 sm:h-12 p-2 border-2 rounded-lg bg-gray-200 text-gray-700 font-medium text-xs sm:text-base">
                GitHub
              </div>
              <div className="flex items-center justify-center w-20 h-10 sm:w-24 sm:h-12 p-2 border-2 rounded-lg bg-gray-200 text-gray-700 font-medium text-xs sm:text-base">
                HTML
              </div>
              <div className="flex items-center justify-center w-20 h-10 sm:w-24 sm:h-12 p-2 border-2 rounded-lg bg-gray-200 text-gray-700 font-medium text-xs sm:text-base">
                CSS
              </div>
              <div className="flex items-center justify-center w-24 h-10 sm:w-28 sm:h-12 p-2 border-2 rounded-lg bg-gray-200 text-gray-700 font-medium text-xs sm:text-base">
                JavaScript
              </div>
              <div className="flex items-center justify-center w-28 h-10 sm:w-32 sm:h-12 p-2 border-2 rounded-lg bg-gray-200 text-gray-700 font-medium text-xs sm:text-base">
                Responsive Design
              </div>
              <div className="flex items-center justify-center w-28 h-10 sm:w-32 sm:h-12 p-2 border-2 rounded-lg bg-gray-200 text-gray-700 font-medium text-xs sm:text-base">
                Problem Solving
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
