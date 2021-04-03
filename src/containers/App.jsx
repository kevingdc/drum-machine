import styled from "styled-components";

import DrumMachine from "../components/DrumMachine";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

const App = () => {
  return (
    <StyledDiv>
      <DrumMachine />
    </StyledDiv>
  );
};

export default App;
