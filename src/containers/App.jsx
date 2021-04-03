import React from "react";

import DrumMachine from "../components/DrumMachine";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <DrumMachine />
      </div>
    );
  }
}

export default App;
