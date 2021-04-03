import styled from "styled-components";

import DrumPadSection from "./DrumPadSection";
import Display from "./Display";

import { theme } from "../styles/variables";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${theme.darkGray};
  padding: 8rem;
`;

const DrumMachine = () => {
  return (
    <StyledDiv id="drum-machine">
      <Display />
      <DrumPadSection />
    </StyledDiv>
  );
};

export default DrumMachine;
