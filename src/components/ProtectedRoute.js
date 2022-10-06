import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ loggedIn, component: Component, ...props }) => {
  return (
    <Route>
      {() => (loggedIn === false) ? <Redirect to="/" /> : <Component {...props} />
      }
    </Route>
  );
};

export default ProtectedRoute; 