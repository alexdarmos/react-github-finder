import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';
const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="Github Finder" icon="fab fa-github" />

            {/* passing props searchUsers and clearUsers from search up to its parent */}
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="./user/:login" component={User} />
            </Switch>
            <Alert />

            <div className="container">
              {/* Users component is rendered here, note we pass the props of loading and users through to the child Users */}
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;

/**Turnary if statement  example:
 * if loading is true, do first part, else do part on other side of colon
 * {loading ? <h4>Loading</h4> : <h1>Hello {name}</h1>}**/
