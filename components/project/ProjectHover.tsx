"use client";
import { ArrowIcon } from "../icons/Icons";
import projectsData from "@/data/project/projectsData";
import useHover from "@/hooks/hover/useHover";
import Link from "next/link";

const ProjectHover = () => {
  const { component, onMouseEnter, onMouseLeave, revealRef, textRef } =
    useHover();

  return (
    <section ref={component}>
      <ul>
        {projectsData.map((project, index) => (
          <li
            key={project.title}
            ref={(element) => {
              if (element) textRef.current[index] = element;
            }}
            onMouseEnter={() => onMouseEnter(index, project.image)}
            onMouseLeave={onMouseLeave}
          >
            <Link
              className="border-y border-y-slate-100 py-10 flex items-center justify-between cursor-pointer"
              href={`/projects/${project.title.split(" ").join("-")}`}
            >
              <div>
                <h2 className="text-xl md:text-3xl font-bold">
                  {project.title}
                </h2>
                <h3 className="text-yellow-400">{project.tech}</h3>
              </div>
              <button className="ml-auto flex items-center gap-2 text-xl font-medium md:ml-0">
                <span>View Project</span>
                <ArrowIcon />
              </button>
            </Link>
          </li>
        ))}
      </ul>
      <div
        ref={revealRef}
        className="hidden md:block pointer-events-none absolute left-0 top-0 -z-10 h-[320px] w-[220px] rounded-lg bg-cover bg-center opacity-0 transition-[background] duration-300"
      ></div>
    </section>
  );
};

export default ProjectHover;
