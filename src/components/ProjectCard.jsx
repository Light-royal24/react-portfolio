import React from "react";

const ProjectCard = ({project}) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 px-2" id="projectCard">
      <div className="rounded-md bg-black text-white">
        <div className="p-1.5 w-full h-40">
          <div className="h-full w-full rounded-md shadow-md">
          <img src={project.image} alt={project.title} className="object-fill h-full w-full rounded-md shadow-md bg-blend-lighten"/>
          </div>
        </div>

        <div className="card-content px-2 pt-4 text-center mt-4 flex justify-center">
          <div className="w-5/6">
            <h4 className="font-bold text-blue-900 font-black">{project.title}</h4>
            <p className="text-gray-600 text-sm font-semibold mt-2">{project.desc}</p>
          </div>

        </div>

        <div className="flex flex-wrap w-full px-8 text-center gap-1 mt-2">
          {project.tools.map((tool) => (
              <a target="_blank" className="flex items-center bg-white text-black p-1 rounded-sm uppercase tracking-wide" href={tool.link} key={tool.name}>
                <i className={`${tool.icon} text-black text-lg`} ></i>
                <div className="text-xs font-semibold text-blue-400">
                {tool.name}
                </div>
              </a>
            ))}
        </div>

        <div className="flex w-full flex-nowrap mt-6">
          <a href={project.code} className="flex-grow text-center bg-yellow-400 text-white py-3 rounded-bl-md">View Code</a>
          <a href={project.live} className="flex-grow text-center  bg-red-400 text-white py-3 rounded-br-md">View Site</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
