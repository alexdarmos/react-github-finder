import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

//axios allows us to make promises within our api calls
import axios from 'axios';

import './App.css';
class App extends Component {
  //initializing the state of users and loading
  state = {
    users: [],
    loading: false,
    alert: null
  };

  //Search github users- note that searchUsers is a prop from Search.js
  searchUsers = async text => {
    //this is how you change state
    this.setState({ loading: true });

    //sets variable to api GET call to github, note client_id and client_secret are global variables
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    //change the states object to the newly called data from github, as well as loading bool
    this.setState({ users: res.data.items, loading: false });
    console.log(text);
  };

  //Clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  //set alert
  setAlert = (message, type) => {
    this.setState({ alert: { msg: message, type: type } });
    setTimeout(() => this.setState({ alert: null }), 3000);
  };

  //render is a required lifecycle method responsible for rendering components to the UI
  render() {
    //destructering, so we don't need this.state every time we refernce users and loading in the code
    const { users, loading } = this.state;

    return (
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
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
          </Switch>
          <Alert alert={this.state.alert} />

          <div className="container">
            {/* Users component is rendered here, note we pass the props of loading and users through to the child Users */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

/**Turnary if statement  example:
 * if loading is true, do first part, else do part on other side of colon
 * {loading ? <h4>Loading</h4> : <h1>Hello {name}</h1>}**/
