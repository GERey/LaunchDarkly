import React from 'react';

//taken from https://openclassrooms.com/en/courses/4286486-build-web-apps-with-reactjs/4286711-build-a-ticking-clock-component
class WorseClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  render() {
    return (
      <p className="App">
        The time is {this.state.time}.
      </p>
    );
  }
} 

export default WorseClock;