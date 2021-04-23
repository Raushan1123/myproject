import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Error404 from "./components/404";
import { PAGE_UNDER_CONSTRUCTION } from "./constants";
import {
  APP_FAQs,
  APP_HOME,
  APP_NOTIFICATIONS,
  APP_REPORTS,
} from "./api/endpoints";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path={APP_HOME} component={Dashboard} />
      <Route
        exact
        path={APP_NOTIFICATIONS}
        component={() => <Error404 text={PAGE_UNDER_CONSTRUCTION} />}
      />
      <Route
        exact
        path={APP_REPORTS}
        component={() => <Error404 text={PAGE_UNDER_CONSTRUCTION} />}
      />
      <Route
        exact
        path={APP_FAQs}
        component={() => <Error404 text={PAGE_UNDER_CONSTRUCTION} />}
      />
      <Route component={() => <Redirect to={APP_HOME} />} />
    </Switch>
  );
};

export default MainRouter;
