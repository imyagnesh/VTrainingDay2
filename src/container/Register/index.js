import React, { Component } from "react";
import PropTypes from "prop-types";
import RegisterForm from "../../component/registerForm";
import Wrapper from "../../HOC/wrapper";

class Register extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(data) {
    const {
      actions: { register }
    } = this.props;
    this.props.resetForm("register");

    register({
      ...data,
      id: new Date().getUTCMilliseconds(),
      created_at: new Date(),
      updated_at: new Date()
    });
  }

  render() {
    const { auth } = this.props;
    if (auth.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        {auth.data && <span>Register Success!</span>}
        {auth.error && <span>Register Failed!</span>}
        <RegisterForm onSubmit={this.submit} />
      </div>
    );
  }
}

Register.propTypes = {};

export default Wrapper(Register);
