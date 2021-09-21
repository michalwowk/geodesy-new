import React from "react";
import styled from "@emotion/styled/macro";
import { Droppable } from "react-beautiful-dnd";

import Task from "./Task";
import { AddTodoForm } from "./AddTodoForm/AddTodoForm";
import { ProjectType } from "utils/initialData";

interface TaskListProps {
  isDraggingOver: boolean;
}

export interface BoardColumnProps {
  column: {
    id: string;
    title: string;
    projects: (ProjectType | undefined)[];
  };
}

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 10px;
`;

const Title = styled.h3``;

const TaskList = styled.div<TaskListProps>`
  display: grid;
  row-gap: 8px;
`;

const BoardColumn = ({ column }: BoardColumnProps) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <TaskList
            isDraggingOver={snapshot.isDraggingOver}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {column.projects.map((project, index) => (
              <Task
                columnId={column.id}
                key={project?.id}
                task={project}
                index={index}
              />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
      <AddTodoForm columnId={column.id} />
    </Container>
  );
};

export default BoardColumn;
