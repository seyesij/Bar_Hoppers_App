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
      <div className="register-container">
        <div className="register">
          <h4 className="registerpage">Register for an account!</h4>
          <form className="registerform" onSubmit={(e) => this.props.handleRegisterSubmit(e, this.state.firstname, this.state.lastname, this.state.username, this.state.email, this.state.password)}>
            <input type="text" name="firstname" value={this.state.firstname} placeholder="Firstname" onChange={this.handleInputChange}  />
            <input type="text" name="lastname" value={this.state.lastname} placeholder="Lastname" onChange={this.handleInputChange}  />
            <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleInputChange}  />
            <input type="email" name="email" value={this.state.email} placeholder="Email" onChange={this.handleInputChange} />
            <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleInputChange}  />
            <input type="submit" value="Register" />
          </form>
        </div>
      </div>
    )
  }
}

export default Register;
