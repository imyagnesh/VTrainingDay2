import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loadable from "react-loadable";
import logo from "./logo.svg";
// import Home from "./container/Home";
// import Login from "./container/Login";
// import Register from "./container/Register";
import PrivateRoute from "./component/PrivateRoute";

import "./App.css";

const AsyncHome = Loadable({
  loader: () => import("./container/Home"),
  loading() {
    return <div>Loading...</div>;
  }
});

const AsyncLogin = Loadable({
  loader: () => import("./container/Login"),
  loading() {
    return <div>Loading...</div>;
  }
});

const AsyncRegister = Loadable({
  loader: () => import("./container/Register"),
  loading() {
    return <div>Loading...</div>;
  }
});

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/Home">Home</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={AsyncLogin} />
          <Route path="/register" component={AsyncRegister} />
          <PrivateRoute
            path="/home"
            isAuthenticated={true}
            component={AsyncHome}
          />
        </div>
      </Router>
    );
  }
}

export default App;
