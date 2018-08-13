import React, { Component } from "react";
import PropTypes from "prop-types";
import Wrapper from "../../HOC/wrapper";

class Home extends Component {
  render() {
    const { state } = this.props.location;
    return (
      <div>
        {state && <span>{`Hello, ${state.firstName} ${state.lastName}`}</span>}
      </div>
    );
  }
}

Home.propTypes = {};

export default Wrapper(Home);
