import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
  return <div>Page one</div>;
};
const PageTwo = () => {
  return (
    <div>
      Page two <br />
      <button>Click me!</button>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={PageOne} />
      <Route path='/pagetwo' component={PageTwo} />
    </BrowserRouter>
  );
};
export default App;
