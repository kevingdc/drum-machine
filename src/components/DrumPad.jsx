import React from "react";
import { connect } from "react-redux";

import { setDisplayText } from "../store/actions";

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.text}</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDisplayText: text => {
      dispatch(setDisplayText(text));
    },
  };
};

export default connect(null, mapDispatchToProps)(DrumPad);
