import React from "react";

export default class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Coding Ninjas",
      curIndex: 0,
      currentName: ""
    };
    this.intervalId = null; // To store interval reference
  }

  // This function adds a character to the string.
  typeWriterEffect = () => {
    this.setState((prevState) => {
      return {
        curIndex: prevState.curIndex + 1,
        currentName: prevState.fullName.substring(0, prevState.curIndex)
      };
    });
  };

  // Required lifecycle methods here
  componentDidMount() {
    // Start the typing effect only if showName is true
    if (this.props.showName) {
      this.intervalId = setInterval(this.typeWriterEffect, 500);
    }
    console.log("componentDidMount")
  }
  componentDidUpdate(prevProps) {
    // Start/Stop typing based on showName prop change
    if (prevProps.showName !== this.props.showName) {
      if (this.props.showName) {
        this.intervalId = setInterval(this.typeWriterEffect, 500);
      } else {
        clearInterval(this.intervalId);
        this.setState({ currentName: "", curIndex: 0 });
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId); // Cleanup interval when component unmounts
  }
  render() {
    return <h1>{this.state.currentName}</h1>;
  }
}
