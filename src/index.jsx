import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./containers/App";

import GlobalStyle from "./styles/GlobaStyle";

import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
