import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@material-ui/core";
import styled from "@emotion/styled/macro";
import { Formik, Field, Form, FormikHelpers } from "formik";

import { colors } from "styles/colors";
import { useProjectsContext } from "context/projectsContext";

interface Props {}

interface Values {
  title: string;
}

const EditPage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: ${colors.black};
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.black};
  width: 100%;
  padding: 10px 0;
`;

export const Project = (props: Props) => {
  let { seoTitle } = useParams<{ seoTitle: string }>();
  const id = seoTitle.split("-")[0];

  const { projectsData, setProjectsData } = useProjectsContext();

  const currentProject = projectsData.find((project) => project.id === id);

  return (
    <Container maxWidth="xl">
      {JSON.stringify(currentProject)}
      <EditPage>
        <Title>Signup</Title>
        <Formik
          initialValues={{
            title: `${currentProject?.title}`,
            type: `${currentProject?.type}`,
          }}
          onSubmit={(values: Values) => {
            const newProjectsData = [...projectsData];

            let indexOfUpdatedProject = newProjectsData.findIndex(
              (project) => project.id === id
            );

            //TODO: Jak pozbyc sie tego undefined ciagnie sie to za mna od mapBoardsToColumn
            if (!currentProject) {
              return;
            }

            newProjectsData[indexOfUpdatedProject] = {
              ...currentProject,
              ...values,
            };

            setProjectsData(newProjectsData);
          }}
        >
          <Form>
            <InputGroup>
              <label htmlFor="title">Tytuł</label>
              <Field id="title" name="title" placeholder="Tytuł" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="type">Type</label>
              <Field id="type" name="type" placeholder="Type" />
            </InputGroup>

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </EditPage>
    </Container>
  );
};
