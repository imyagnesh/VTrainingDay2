import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import LoginForm from "../../component/loginForm";
import actions from "../../Actions";
import Wrapper from "../../HOC/wrapper";

class Login extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  login(item) {
    const {
      actions: { getUser },
      history
    } = this.props;
    getUser().then(res => {
      const {
        users: { data }
      } = this.props;

      const isAuthenticated = data.filter(
        x => x.email === item.email && x.password === item.password
      );

      if (isAuthenticated.length > 0) {
        history.push({
          pathname: "/home",
          state: isAuthenticated[0]
        });
      } else {
        alert("Login Fail");
      }
    });
  }

  render() {
    return (
      <div>
        <LoginForm onSubmit={this.login} />
      </div>
    );
  }
}

Login.propTypes = {
  users: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(Wrapper(Login));
