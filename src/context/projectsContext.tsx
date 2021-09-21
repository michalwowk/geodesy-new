import { createContext, useState, useContext } from "react";
import { projects } from "utils/initialData";

const ProjectsContext = createContext<ProjectsContextProviderType | null>(null);

export const ProjectsProvider: React.FC = (props) => {
  const value = useProjectsProvider();

  return (
    <ProjectsContext.Provider
      {...props}
      value={value}
    ></ProjectsContext.Provider>
  );
};

const useProjectsProvider = () => {
  const [projectsData, setProjectsData] = useState(projects);

  return { projectsData, setProjectsData };
};

type ProjectsContextProviderType = ReturnType<typeof useProjectsProvider>;

export const useProjectsContext = () => {
  const context = useContext(ProjectsContext);

  if (!context) {
    throw new Error("useProjectsContext must be used inside ProjectsProvider");
  }

  return context;
};
