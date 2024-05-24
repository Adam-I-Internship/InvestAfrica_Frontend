import React from "react";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import HomePage from './HomePage';
// import AboutPage from './AboutPage';

function App() {
  return (
    <div>
      <div>
        <h1 className="font-bold">This is Root App</h1>
        <p>
          Start by adding pages in the src folder and then add the routes in the
          App.jsx file
        </p>
      </div>
      {/* <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
