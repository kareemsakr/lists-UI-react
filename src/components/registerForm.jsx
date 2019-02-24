import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { registerUser } from "../services/userService";

class RegisterForm extends Form {
  //username = React.createRef(); //had to comment the ref since we moved the comonent to another file
  state = { data: { username: "", password: "", name: "" }, errors: {} }; //if the value of any of these is undefined, it will cause the below inpur to become an  uncontrolled input, also if its null , react will fuss

  schema = {
    username: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
      .label("User name"),
    password: Joi.string()
      .required()
      .min(5),
    name: Joi.string() //.required()
  };

  doSubmit = async () => {
    try {
      await registerUser(this.state.data);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data; //will also display a toast which is implemented in httpservice
      }
    }
  };

  componentDidMount() {
    //this.username.current.focus(); //or add autoFocus to the input field
  }

  render() {
    //const { data, errors } = this.state;
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}

          {this.renderSubmit("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
