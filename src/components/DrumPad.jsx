import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { setDisplayText } from "../store/actions";

import { theme } from "../styles/variables";

const StyledButton = styled.button`
  background-color: ${theme.lightGray};
  color: ${theme.white};
  border: none;
  padding: 3rem;
  font-size: 4rem;
  width: 100%;
  height: 100%;
  text-align: center;
`;
class DrumPad extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  handleClick() {
    const { text, description } = this.props;

    const audio = document.getElementById(text);
    audio.play();

    this.props.setDisplayText(description);
  }

  handleKeyDown(event) {
    if (event.key.toUpperCase() === this.props.text) {
      this.handleClick();
    }
  }

  render() {
    const { text, audio, description } = this.props;
    return (
      <div onKeyUp={this.handleKeyUp}>
        <StyledButton
          id={description}
          className="drum-pad"
          onClick={this.handleClick}
        >
          {text}
          <audio
            id={text}
            className="clip"
            src={audio}
            type="audio/mpeg"
          ></audio>
        </StyledButton>
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
