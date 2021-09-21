import React from "react";
import { Route, Switch } from "react-router-dom";

import { UnauthenticatedHeader } from "./UnauthenticatedHeader";
import { Home } from "views/Home";

const UnauthenticatedApp = () => {
  return (
    <div>
      <UnauthenticatedHeader />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default UnauthenticatedApp;
