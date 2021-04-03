import styled from "styled-components";

import DrumPad from "./DrumPad";

import { audioMapper } from "../utils/audioHelper";

import { theme } from "../styles/variables";

const texts = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  background-color: ${theme.darkGray};
`;

const DrumPadSection = () => {
  return (
    <StyledDiv>
      {texts.map(text => {
        const { file, description } = audioMapper(text);
        return (
          <DrumPad
            key={description}
            text={text}
            audio={file}
            description={description}
          />
        );
      })}
    </StyledDiv>
  );
};

export default DrumPadSection;
