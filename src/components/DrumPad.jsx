import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { setDisplayText } from "../store/actions";

import { theme } from "../styles/variables";

const StyledButton = styled.button`
  background-color: ${theme.lightGray};
  color: ${theme.white};
  border: none;
  margin: 0.5rem;
  padding: 3rem;
  font-size: 4rem;
`;
class DrumPad extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { text, description } = this.props;

    const audio = document.getElementById(text);
    audio.play();

    this.props.setDisplayText(description);
  }

  render() {
    const { text, audio, description } = this.props;
    return (
      <div>
        <StyledButton
          id={description}
          className="drum-pad"
          onClick={this.handleClick}
        >
          {text}
        </StyledButton>
        <audio id={text} className="clip" type="audio/mpeg">
          <source src={audio}></source>
        </audio>
      </div>
    );
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
