import { connect } from "react-redux";
import styled from "styled-components";

import { theme } from "../styles/variables";

const StyledDiv = styled.div`
  margin-bottom: 4rem;
  padding: 2rem;
  background-color: ${theme.lightGray};
  color: ${theme.primary};
  font-size: 3rem;
  min-width: 10rem;
  max-width: 30rem;
  min-height: 5rem;
  line-height: 5rem;
  text-align: center;
`;

const Display = props => {
  return <StyledDiv id="display">{props.text}</StyledDiv>;
};

const mapStateToProps = state => {
  return {
    text: state.display.text,
  };
};

export default connect(mapStateToProps, null)(Display);
