import React from "react";

class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name} {this.props.lastname} </div>;
  }
}

export default Hello;
