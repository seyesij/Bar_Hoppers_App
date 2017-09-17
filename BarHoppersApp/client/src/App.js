import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: false,
      user: null,
      redirect: false,
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.logOut = this.logOut.bind(this);
  }

//Auth
  handleLoginSubmit(e, username, password) {
    e.preventDefault();
    axios.post('/auth/login', {
      username,
      password,
    }).then(res => {
      this.setState({
        auth: res.data.auth,
        user: res.data.user,
        redirect: true
      });
     }).catch(err => console.log(err));
  }

  handleRegisterSubmit(e, firstname, lastname, username, email, password) {
    e.preventDefault();
    axios.post('/auth/register', {
      firstname,
      lastname,
      username,
      email,
      password,
    }).then(res => {
      this.setState({
        auth: res.data.auth,
        user: res.data.user,
        redirect: true
      });
    }).catch(err => console.log(err));
  }

  logOut() {
    axios.get('/auth/logout')
      .then(res => {
        console.log(res);
        this.setState({
          auth: false,
          redirect: false
        });
      }).catch(err => console.log(err));
  }

//Render
  render() {
    return (
     <Router>
      <div className="App">
        <Header
          logOut={this.logOut}
        />
        <Route exact path='/' render={() => <Homepage
          /> } />
        <Route exact path='/login' render={() => <Login
          handleLoginSubmit={this.handleLoginSubmit}
          /> } />
        <Route exact path='/register' render={() => <Register
          handleRegisterSubmit={this.handleRegisterSubmit}
          /> } />
        <Route exact path='/profile' render={() => <Profile
          user={this.state.user}
          /> } />
          {this.state.redirect ? <Redirect push to={'/'} /> : ''}
      </div>
     </Router>
    );
  }
}

export default App;
