import React, { Component } from 'react';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={(e) => this.props.handleRegisterSubmit(e, this.state.firstname, this.state.lastname, this.state.username, this.state.email, this.state.password)}>
          <input type="text" name="firstname" value={this.state.firstname} placeholder="Firstname" onChange={this.handleInputChange}  />
          <input type="text" name="lastname" value={this.state.lastname} placeholder="Lastname" onChange={this.handleInputChange}  />
          <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleInputChange}  />
          <input type="email" name="email" value={this.state.email} placeholder="email" onChange={this.handleInputChange} />
          <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleInputChange}  />
          <input type="submit" value="Register!" />
        </form>
      </div>
    )
  }
}

export default Register;
