import React, { useState } from "react";
import "./App.css";
import Welcome from "./Welcome";

/* class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: ["Juan", "Pedro", "Germán"],
    };
  }

  render() {
    return (
      <div>
        {this.state.names.map((name) => (
          <Welcome name={name} key={name}/>
        ))}
      </div>
    );
  }
} */

const App = () => {
  const [names, seNames] = useState(["Juan", "Pedro", "Germán"]);
  return (
    <div>
      {names.map((name) => (
        <Welcome name={name} key={name} />
      ))}
    </div>
  );
};

export default App;
