// import React from 'react'

// const Projects = () => {
//   return (
// <div className='flex flex-col items-center bg-gray-100'>
// <h1 className='text-black text-2xl sm:text-4xl font-bold'>PROJECTS</h1>
// <div className='mt-2 w-16 h-[6px] border rounded bg-red-700 mb-1 sm:mb-2'></div>
// <p className='text-gray-500 text-lg sm:text-xl mb-8sm:mb-16 max-w-2xl text-center mb-4'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
// <img className='h-96' src="projectfoodonclick.png" alt="foodonclick" srcset="" />
// </div>
//   )
// }

// export default Projects

// import React from 'react'

// const Projects = () => {
//   return (
//     <div className='flex flex-col items-center bg-gray-100 px-4'>
//       <h1 className='text-black text-2xl sm:text-4xl font-bold'>PROJECTS</h1>
//       <div className='mt-2 w-16 h-[6px] border rounded bg-red-700 mb-1 sm:mb-2'></div>
//       <p className='text-gray-500 text-lg sm:text-xl mb-8 sm:mb-16 max-w-2xl text-center'>
//         Here you will find some of the personal and clients projects that I created with each project containing its own case study.
//       </p>
//       {/* <a href="https://kriti-food-del-frontend.onrender.com/" target="_blank" rel="noopener noreferrer"> */}

//       {/* <img
//         className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto max-h-[600px] '
//         src="projectfoodonclick.png"
//         alt="foodonclick"
//       /> */}
//       {/* </a> */}
//     <div className='flex flex-row'>
//       <div><img
//         className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto max-h-[600px] '
//         src="projectfoodonclick.png"
//         alt="foodonclick"
//       />
//       </div>
//       <div>
//         <p>Foodonclick is a modern food delivery platform offering a seamless ordering experience with secure authentication, real-time order tracking, and integrated payment gateways. Users can browse menus, customize meals, and manage orders effortlessly. Restaurant owners get a dedicated dashboard for menu updates and sales insights. Built with MERN Stack, JWT, Stripe, Cloudinary, and Tailwind CSS for a smooth and responsive experience.</p>
//         <button className='bg-pink-700 text-white w-36 h-12 border rounded-lg '>Foodonclick</button>
//         <button className='bg-pink-700 text-white w-36 h-12 border rounded-lg '>Admin panel</button>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default Projects

import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center bg-gray-100 px-4 py-16">
      {/* Title */}
      <h1 className="text-black text-2xl sm:text-4xl font-bold">PROJECTS</h1>
      <div className="mt-2 w-16 h-[6px] border rounded bg-red-700 mb-2 sm:mb-4"></div>
      <p className="text-gray-500 text-lg sm:text-xl mb-8 sm:mb-16 max-w-2xl text-center">
        Here you will find projects that I
        created, each containing its own case study.
      </p>
      
      <div className="flex flex-col gap-12 max-w-7xl w-full px-4">
        {/* Project 1 - Foodonclick */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-full md:w-3/5 lg:w-3/4 xl:max-w-3xl flex justify-center">
            <a
              href="https://kriti-food-del-frontend.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full h-auto transition-transform transform hover:scale-105"
                src="projectfoodonclick.png"
                alt="Foodonclick project"
              />
            </a>
          </div>

          <div className="w-full md:w-1/2 px-4">
            <p className="text-gray-600 mt-4 md:mt-16 text-lg sm:text-base sm:mb-4">
              Foodonclick is a modern food delivery platform offering a seamless
              ordering experience with secure authentication, real-time order
              tracking, and integrated payment gateways. Users can browse menus,
              customize meals, and manage orders effortlessly. Restaurant owners
              get a dedicated dashboard for menu updates and sales insights.
              Built with MERN Stack, JWT, Stripe, Cloudinary, and Tailwind CSS for
              a smooth and responsive experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
              <a
                href="https://kriti-food-del-frontend.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-pink-700 text-white w-full sm:w-40 h-12 sm:h-14 text-lg border rounded-lg hover:bg-pink-800 transition">
                  Foodonclick
                </button>
              </a>
              <a
                href="https://kriti-food-del-adminpanel.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-pink-700 text-white w-full sm:w-40 h-12 sm:h-14 text-lg border rounded-lg hover:bg-pink-800 transition">
                  Admin Panel
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 - MaxOutFitness */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-full md:w-[90%] lg:w-[85%] xl:w-[80%] flex justify-center">
            <a
              href="https://kriti-maxoutfitness.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full h-auto transition-transform transform hover:scale-105"
                src="projectmaxoutfitnessmockup-removebg.png"
                alt="MaxOutFitness project"
              />
            </a>
          </div>

          <div className="w-full md:w-1/2 px-4">
            <p className="text-gray-600 mt-4 md:mt-16 text-lg sm:text-base sm:mb-4">
              MaxOutFitness is a dynamic fitness platform designed to inspire and
              guide users on their health journey. It provides personalized
              workout plans, BMI index calculator, and expert fitness insights.
              The platform features a user-friendly interface with interactive
              fitness programs and motivational content. It ensures a seamless
              and responsive experience for fitness enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
              <a
                href="https://kriti-maxoutfitness.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-pink-700 text-white w-full sm:w-40 h-12 sm:h-14 text-lg border rounded-lg hover:bg-pink-800 transition">
                  MaxOutFitness
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
