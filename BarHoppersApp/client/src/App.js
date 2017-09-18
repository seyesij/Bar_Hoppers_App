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
      search: null,
      searchResults: null,
      searchDataLoaded: false,
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.logOut = this.logOut.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.inputSearch = this.inputSearch.bind(this);
  }

//Search
  handleSearch() {
    axios.get(`https://api.barzz.net/api/search?zip=${this.state.search}&user_key=9cc3ebaf5b091c716c3b42da23413ca9`)
    .then(res => {
      this.setState({
        searchResults: res.data,
        searchDataLoaded: true
      })
    })
    .catch(err => console.log(err))
  }

  inputSearch(e){
    this.setState({search: e.target.value})
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
          auth={this.state.auth}
        />
        <Route exact path='/' render={() => <Homepage
          inputSearch={this.inputSearch}
          handleSearch={this.handleSearch}
          searchResults={this.state.searchResults}
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
