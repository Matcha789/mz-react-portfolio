import React from "react";
//import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import threeJsSite from "../assets/portfolio/threejs-portfolio-pic.png";
import reactAdmin from "../assets/portfolio/react-admin-portfolio-pic.png";
import todoList from "../assets/portfolio/todolist-portfolio-pic.png";
//import reactParallax from '../assets/portfolio/reactParallax.jpg';
//import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
//import reactWeather from '../assets/portfolio/reactWeather.jpg';
//import { Link } from 'react-scroll'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: threeJsSite,
      href: "https://astounding-moxie-4e2d00.netlify.app/",
      demo: "https://github.com/Matcha789/threejs-portfolio-website",
    },
    {
      id: 2,
      src: reactAdmin,
      href: "https://splendid-bavarois-118a3f.netlify.app/",
      demo: "https://github.com/Matcha789/mz-react-admin",
    },
    {
      id: 3,
      src: todoList,
      href: "https://gregarious-scone-04a755.netlify.app/",
      demo: "https://github.com/Matcha789/mz-todolist",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={href} rel="noreferrer" target="_blank">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={demo} rel="noreferrer" target="_blank">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
