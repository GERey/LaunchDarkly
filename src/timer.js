import React from 'react';
import ms from 'pretty-ms';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';


//taken from https://medium.com/@650egor/react-30-day-challenge-day-1-simple-timer-df85d0867553

class Timer extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        time: 0,
        isOn: false,
        start: 0
      }
      this.startTimer = this.startTimer.bind(this)
      this.stopTimer = this.stopTimer.bind(this)
      this.resetTimer = this.resetTimer.bind(this)
    }
    startTimer() {
      this.setState({
        isOn: true,
        time: this.state.time,
        start: Date.now() - this.state.time
      })
      this.timer = setInterval(() => this.setState({
        time: Date.now() - this.state.start
      }), 1);
    }
    stopTimer() {
      this.setState({isOn: false})
      clearInterval(this.timer)
    }
    resetTimer() {
      this.setState({time: 0, isOn: false})
    }
    render() {

      if(this.props.flags.georgePaidFlagForTimersPermanentAugust){
        let start = (this.state.time === 0) ?
          <button onClick={this.startTimer}>start</button> :
          null
        let stop = (this.state.time === 0 || !this.state.isOn) ?
          null :
          <button onClick={this.stopTimer}>stop</button>
        let resume = (this.state.time === 0 || this.state.isOn) ?
          null :
          <button onClick={this.startTimer}>resume</button>
        let reset = (this.state.time === 0 || this.state.isOn) ?
          null :
          <button onClick={this.resetTimer}>reset</button>
        return(
          // <!-- Set something here to ab test if more people use the timer if it is named Seconds Passed. -->
          <div>
            <h3>timer: {ms(this.state.time)}</h3>
            {start}
            {resume}
            {stop}
            {reset}
          </div>
        )
      }
      else { 
        return null;
      }
    }
  }

  export default withLDConsumer()(Timer);

