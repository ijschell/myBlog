import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home'
import Sidebar from './components/sidebar'
import SinglePage from './pages/single'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/single">
            <SinglePage></SinglePage>
          </Route>
        </Switch>
        <Sidebar></Sidebar>
      </div>
    </Router>
  );
}

export default App;
