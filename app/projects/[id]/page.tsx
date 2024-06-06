import CurrentProject from "@/components/project/CurrentProject";
import projects from "@/data/projectData";

const Project = ({ params }: { params: { id: string } }) => {
  const currentProject = projects.find(
    (project) => project.title === params.id.split("-").join(" ")
  );

  return currentProject && <CurrentProject project={currentProject} />;
};

export default Project;
