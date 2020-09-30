import React from "react";
import { Route } from "react-router-dom";

/* components */
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <Route exact path="/" component={Landing} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Projects} />
    </>
  );
}

export default App;
