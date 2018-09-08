import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  //username = React.createRef();
  state = {
    account: { username: "", password: "" }
  };

  componentDidMount() {
    //this.username.current.focus();
  }

  handleSubmit = e => {
    e.preventDefault();

    // Call the server
    //const username = this.username.current.value;
    //console.log('Login Submitted: ', username);
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
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
          />
          <Input
            type="password"
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
