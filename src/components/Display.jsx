import React from "react";
import { connect } from "react-redux";

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.text}</div>;
  }
}

const mapStateToProps = state => {
  return {
    text: state.display.text,
  };
};

export default connect(mapStateToProps, null)(Display);
