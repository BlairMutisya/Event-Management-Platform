import React from "react";
import { Route, Switch } from "react-router-dom";
import EventList from "./components/EventList";
import EventDetail from "./components/EventDetail";
import EventForm from "./components/EventForm";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={EventList} />
      <Route exact path="/event/new" component={EventForm} />
      <Route exact path="/event/:id" component={EventDetail} />
    </Switch>
  );
};

export default Routes;
