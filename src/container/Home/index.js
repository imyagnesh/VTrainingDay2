import React, { Component } from "react";
import PropTypes from "prop-types";

class Home extends Component {
  render() {
    const { state } = this.props.location;
    return (
      <div>
        <span>{`Hello, ${state.firstName} ${state.lastName}`}</span>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
