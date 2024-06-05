import ProjectHover from "@/components/project/ProjectHover";

export const metadata = {
  title: "Projects - Beka Lomsadze",
  description: "Learn more about my projects",
};

const Projects = () => {
  return (
    <main className="max-w-[1250px] mx-auto pt-10 px-6 md:px-0 md:pt-40 text-slate-300">
      <h1 className="font-bold leading-tight tracking-tight text-7xl md:text-9xl col-start-1">
        Projects
      </h1>
      <p className="text-xl my-8">
        A selection of some of my favorite website and design projects.
      </p>
      <ProjectHover />
    </main>
  );
};

export default Projects;
