import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import EventList from "./components/EventList";
import EventDetail from "./components/EventDetail";
import EventForm from "./components/EventForm";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={EventList} />
          <Route exact path="/event/new" component={EventForm} />
          <Route exact path="/event/:id" component={EventDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
