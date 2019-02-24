import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/navbar";
import NotFound from "./components/not-found";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import RegisterForm from "./components/registerForm";
import Lists from "./components/lists";
import Test from "./components/test";
import "react-toastify/dist/ReactToastify.css";

import auth from "./services/authService";
import ProtectedRoute from "./components/common/protectedRoute";

class App extends Component {
  state = {};
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    const { user } = this.state;

    return (
      <div className="container">
        <Navbar user={user} />

        <ToastContainer />
        <Switch>
          <ProtectedRoute path="/lists" component={Lists} />
          <Route path="/test" component={Test} />
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/lists" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
