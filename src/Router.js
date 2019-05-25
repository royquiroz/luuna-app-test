import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Users from "./components/users/Users";
import Repositories from "./components/repositories/Repositories";

const Router = () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/users" />} />
    <Route exact path="/users" component={Users} />
    <Route exact path="/repositories" component={Repositories} />
  </Switch>
);

export default Router;
