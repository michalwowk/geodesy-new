import React from "react";
import { Route, Switch } from "react-router-dom";

import { Dashboard } from "views/Dashboard";
import { BoardColumnsProvider } from "context/boardColumnsContext";
import { ProjectsProvider } from "context/projectsContext";
import { Home } from "views/Home";
import { Header } from "./Header";
import { Project } from "views/Project";

const AuthenticatedApp = () => {
  return (
    <ProjectsProvider>
      <BoardColumnsProvider>
        <Header />
        <Switch>
          <Route path="/projects/:seoTitle" children={<Project />} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Home} />
        </Switch>
      </BoardColumnsProvider>
    </ProjectsProvider>
  );
};

export default AuthenticatedApp;
