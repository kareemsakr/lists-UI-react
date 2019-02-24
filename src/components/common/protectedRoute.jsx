import React from "react";
import auth from "../../services/authService";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, render, ...rest }) => {
  const user = auth.getCurrentUser();
  if (!user) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { referrer: rest.location }
        }}
      />
    );
  }
  if (Component) return <Route {...rest} component={Component} />;
  else return <Route {...rest} render={props => render(props)} />;
};

export default ProtectedRoute;

/*
how mosh implemented it
return

<Route
  {...rest}
  render={props => {
    if (!user) {
      return <Redirect to="/login" />;
    } else {
      Component ? <Component {...props} /> : render(props);
    }
  }}
/>;

*/
