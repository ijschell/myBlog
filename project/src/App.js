import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redriect 
} from "react-router-dom";
import store from './redux/store'
import Home from './pages/home'
import Sidebar from './components/sidebar'
import HomeBlog from './pages/blog/home'
import SingleBlog from './pages/blog/single'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/:category" component={HomeBlog}></Route>
          <Route exact path="/:category/:slug" component={SingleBlog}></Route>
        </Switch>
        <Sidebar></Sidebar>
      </div>
    </Router>
  );
}

export default App;
