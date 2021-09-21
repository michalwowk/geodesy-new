import React from "react";
import styled from "@emotion/styled/macro";
import { Draggable } from "react-beautiful-dnd";

import { colors } from "styles/colors";
import { Link } from "react-router-dom";
import { toSeoUrl } from "utils/toSeoUrl";
import { ProjectType } from "utils/initialData";

interface Props {
  task: ProjectType | undefined;
  index: number;
  columnId: string;
}

interface ContainerProps {
  isDragging: boolean;
}

const Container = styled.div<ContainerProps>`
  border: 1px solid ${colors.accent};
  border-radius: 2px;
  padding: 10px 12px;
  background-color: ${(props) => {
    return props.isDragging ? colors.accent : colors.navy;
  }};
  color: ${(props) => {
    return props.isDragging ? colors.navy : colors.white;
  }};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
`;

const Task = ({ task, index }: Props) => {
  if (!task) {
    return null;
  }
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Wrapper>
            <StyledLink to={`/projects/${task.id}-${toSeoUrl(task.title)}`}>
              {task.title}
            </StyledLink>
          </Wrapper>
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
