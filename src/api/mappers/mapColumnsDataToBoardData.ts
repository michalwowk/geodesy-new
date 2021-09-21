import { ProjectType, BoardColumnType } from "utils/initialData";

export const mapColumnsDataToBoardData = (
  boardColumnsData: BoardColumnType[],
  projectsData: ProjectType[]
) => {
  const mappedBoardData = boardColumnsData.map(
    ({ id, title, projectsOrder }) => {
      const projects = projectsOrder.map((projectId) => {
        return projectsData.find((project) => project.id === projectId);
      });

      const newColumns = {
        id,
        title,
        projects,
      };

      return newColumns;
    }
  );

  return mappedBoardData;
};
