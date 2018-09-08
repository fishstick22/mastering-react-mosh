import React, { Component } from "react";
import Input from "./common/input";
import { Object } from "core-js";

class LoginForm extends Component {
  //username = React.createRef();
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  componentDidMount() {
    //this.username.current.focus();
  }

  validate = () => {
    const errors = {};

    const { account } = this.state;
    if (account.username.trim() === '')
      errors.username = 'Username is required.';
    if (account.password.trim() === '')
      errors.password = 'Password is required.';

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;

    // Call the server
    //const username = this.username.current.value;
    console.log('Login Submitted '); 
    //console.log('Login Submitted: ', username);
  };

  validateProperty = ({ name, value }) => {
    if (name === 'username') {
      if (value.trim() === '') return 'Username is required.';
      //...
    }
    if (name === 'password') {
      if (value.trim() === '') return 'Password is required.';
      //...
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = {...this.state.errors};
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            type="password"
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
