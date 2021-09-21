import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import { useFormik } from "formik";
import { v4 as uuid } from "uuid";

import { colors } from "styles/colors";
import { VisuallyHidden } from "../VisuallyHidden";
import { useProjectsContext } from "context/projectsContext";
import { useBoardColumnsContext } from "context/boardColumnsContext";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 4px;
`;

const FormTogglerWrapper = styled.button`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: ${colors.accent};
    span::after,
    span::before {
      background-color: ${colors.accent};
    }
  }
`;

const TogglerButton = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 12px;
  background-color: ${colors.navy};
  border: none;
  position: relative;
  cursor: pointer;

  ::after,
  ::before {
    content: "";
    position: absolute;
    background-color: ${colors.white};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    height: 66%;
    width: 2px;
  }

  ::after {
    width: 66%;
    height: 2px;
  }
`;

const AddTodoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CloseButton = styled.button`
  background-color: transparent;
  width: 20px;
  height: 20px;
  margin-left: 16px;
  position: relative;
  border: none;
  cursor: pointer;
  ::before {
    content: "x";
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 14px;
    font-size: 20px;
    color: ${colors.accent};
  }
`;

interface Props {
  columnId: string;
}

export const AddTodoForm = ({ columnId }: Props) => {
  const [formState, setFormState] = useState<"closed" | "open">("closed");
  const { setProjectsData } = useProjectsContext();
  const { boardColumnsData, setBoardColumnsData } = useBoardColumnsContext();

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (values, { resetForm }) => {
      const id = uuid();

      const newBoardColumnsData = [...boardColumnsData];

      let currentColumn = newBoardColumnsData.find(
        (column) => column.id === columnId
      );

      if (!currentColumn) {
        return;
      }

      currentColumn.projectsOrder.push(id);

      // Add new projects
      setProjectsData((prevState) => {
        console.log(prevState);
        return [
          ...prevState,
          {
            id,
            title: values.title,
          },
        ];
      });

      setBoardColumnsData(newBoardColumnsData);

      setFormState("closed");

      resetForm({
        values: {
          title: "",
        },
      });
    },
  });

  const handleFormClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFormState("closed");
  };

  const handleFormOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFormState("open");
  };

  const isFormOpen = formState === "open";

  return (
    <Wrapper>
      {isFormOpen ? (
        <form onSubmit={formik.handleSubmit}>
          <input
            value={formik.values.title}
            onChange={formik.handleChange}
            name="title"
            type="text"
            id="title"
            placeholder="Dodaj projekt..."
          />
          <AddTodoWrapper>
            <button type="submit">Add project</button>
            <CloseButton onClick={handleFormClose}>
              <VisuallyHidden>Close card</VisuallyHidden>
            </CloseButton>
          </AddTodoWrapper>
        </form>
      ) : (
        <FormTogglerWrapper onClick={handleFormOpen}>
          <TogglerButton /> Add project
        </FormTogglerWrapper>
      )}
    </Wrapper>
  );
};
