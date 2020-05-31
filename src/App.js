import React from 'react';
import { Route } from 'react-router-dom';

/* components */
import Landing from './components/Landing';
import Skills from './components/Skills';

function App() {
  
  return (
    <>
      <Route exact path="/" component={Landing} />
      <Route path="/skills" component={Skills} />
    </>
  );
}

export default App;
