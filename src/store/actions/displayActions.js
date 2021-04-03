import { displayTypes } from "../types";

export const setDisplayText = text => {
  return {
    type: displayTypes.SET_DISPLAY,
    data: { text },
  };
};
