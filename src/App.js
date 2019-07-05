import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';

import './App.css';
class App extends Component {
  state = {
    users: [],
    loading: false
  };

  //fires as soon as it loads
  async componentDidMount() {
    //this is how you change state
    this.setState({ loading: true });

    //sets variable to api GET call to github
    const res = await axios.get('https://api.github.com/users');

    //change the states object to the newly called data from github, as well as loading bool
    this.setState({ users: res.data, loading: false });
  }

  //render is a required lifecycle method responsible for rendering components to the UI
  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          {/* Users component is rendered here, note we pass the props of loading and users through */}
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;

/**Turnary if statement  example:
 * if loading is true, do first part, else do part on other side of colon
 * {loading ? <h4>Loading</h4> : <h1>Hello {name}</h1>}**/
