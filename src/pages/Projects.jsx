import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Projects = () => {
  const { projectsArr } = useContext(AppContext);
  return (
    <div className="px-10 lg:px-[130px] mt-20" id="projects">
      <h2 className="text-5xl font-bold mb-20 text-center">Projects</h2>
      <div className="flex flex-col gap-5 lg:gap-10">
        {projectsArr.map((project, index) => (
          <div
            className="w-full flex flex-col lg:flex-row rounded-3xl gap-3 lg:gap-0"
            key={index}
          >
            <div
              className={`w-full lg:w-[50%] lg:justify-self-cente lg:self-center px-2 lg:px-[80px] flex flex-col  gap-6 ${
                index % 2 === 0 ? "" : "lg:order-1"
              }`}
            >
              <h3 className="text-2xl lg:text-4xl font-bold">
                {project.projectName}
              </h3>
              <p className="text-lg font-sans text-[#828282]">
                {project.projectDesc}
              </p>
              <button
                type="button"
                className="rounded-xl px-6 py-2 border border-1 border-[#25282B] text-[#25282B] self-start"
              >
                <a
                  className="font-serif"
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </button>
            </div>
            <div className="w-full lg:w-[50%]">
              <img
                src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704326400&semt=sph"
                alt="Project"
                className={`w-full h-[40vh] lg:h-[500px] ${
                  index % 2 === 0 ? "lg:rounded-r-3xl" : "lg:rounded-l-3xl"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
