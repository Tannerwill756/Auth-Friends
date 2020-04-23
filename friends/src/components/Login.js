import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  state = {
    account: {
      username: "",
      password: "",
    },
  };

  changeHandler = (e) => {
    e.preventDefault();
    this.setState({
      account: {
        ...this.state.account,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", this.state.account)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        this.props.history.push("/protected");
      })
      .catch((err) => console.log({ err }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.account.username}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="password"
            value={this.state.account.password}
            onChange={this.changeHandler}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
