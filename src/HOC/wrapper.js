import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import actions from "../Actions";

export default WrappedComponent => {
  class componentName extends Component {
    componentWillMount = () => {};

    render() {
      const { auth, users } = this.props;
      if (auth.loading || users.loading) {
        return <div>Loading...</div>;
      }

      return (
        <div>
          {(auth.error || users.error) && (
            <span>Oops! something went wrong</span>
          )}
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }
  const mapStateToProps = state => ({
    auth: state.auth,
    users: state.users
  });

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(componentName);
};
