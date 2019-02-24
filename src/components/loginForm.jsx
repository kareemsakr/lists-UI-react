import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";
import { Redirect } from "react-router-dom";

class LoginForm extends Form {
  //username = React.createRef(); //had to comment the ref since we moved the comonent to another file
  state = { data: { username: "", password: "" }, errors: {} }; //if the value of any of these is undefined, it will cause the below inpur to become an  uncontrolled input, also if its null , react will fuss

  schema = {
    username: Joi.string()
      .required()
      .label("User name"),
    password: Joi.string().required()
  };

  doSubmit = async () => {
    await auth.login(this.state.data);

    //check if user was redirected to login from another uRL
    const { state } = this.props.location;
    window.location = state ? state.referrer.pathname : "/";
  };

  componentDidMount() {
    //this.username.current.focus(); //or add autoFocus to the input field
  }

  render() {
    //const { data, errors } = this.state;
    if (auth.getCurrentUser()) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

          {this.renderSubmit("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
