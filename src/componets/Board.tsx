import React from "react";
import styled from "@emotion/styled/macro";
import { DragDropContext } from "react-beautiful-dnd";

import BoardColumn from "./BoardColumn";
import { useProjectsContext } from "context/projectsContext";
import { useBoardColumnsContext } from "context/boardColumnsContext";
import { mapColumnsDataToBoardData } from "api/mappers/mapColumnsDataToBoardData";

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Board = () => {
  const { projectsData } = useProjectsContext();
  const { boardColumnsData, setBoardColumnsData } = useBoardColumnsContext();

  const mappedBoardData = mapColumnsDataToBoardData(
    boardColumnsData,
    projectsData
  );

  const onDragEnd = (result: any): void => {
    const { destination, source, draggableId } = result;

    const newBoardColumnsData = [...boardColumnsData];

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const startCol = newBoardColumnsData.find(
      (column) => column.id === source.droppableId
    );
    const endCol = newBoardColumnsData.find(
      (column) => column.id === destination.droppableId
    );

    if (!startCol || !endCol) {
      return;
    }

    const droppedProject = startCol.projectsOrder.find(
      (p) => p === draggableId
    );
    if (!droppedProject) {
      return;
    }

    console.log(droppedProject);
    startCol.projectsOrder.splice(source.index, 1);
    endCol.projectsOrder.splice(destination.index, 0, droppedProject);

    setBoardColumnsData(newBoardColumnsData);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {mappedBoardData &&
          mappedBoardData.map((column) => {
            return <BoardColumn key={column.id} column={column} />;
          })}
      </Container>
    </DragDropContext>
  );
};
