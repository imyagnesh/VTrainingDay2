import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import RegisterForm from "../../component/registerForm";
import actions from "../../Actions";

class Register extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(data) {
    alert(JSON.stringify(data));
    const {
      actions: { register }
    } = this.props;
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

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
