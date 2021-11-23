import React from "react";

/* export default class Welcome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{`Hola ${this.props.name}`}</h1>;
  }
} */
const Welcome = ({ name }) => {
  return <h1>{`Hola ${name}`}</h1>;
};

export default Welcome;
