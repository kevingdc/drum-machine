import { displayTypes } from "../types";

const initialState = {
  text: "",
};

const displayReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case displayTypes.SET_DISPLAY:
      return { ...state, text: data.text };
    default:
      return state;
  }
};

export default displayReducer;
