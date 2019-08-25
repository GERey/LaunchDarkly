import React from 'react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

//implement this using useflags as an experiment
//import { useFlags, useLDClient} from 'launchdarkly-react-client-sdk';


// Clock code taken from https://openclassrooms.com/en/courses/4286486-build-web-apps-with-reactjs/4286711-build-a-ticking-clock-component
// Feature flagging is all me ;) 

class WorseClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
    };
  }
  render() {


    if(this.props.flags.georgeTurnOffOldClockTemporary){

        return (
        <p className="App">
            The time is {this.state.time}.
        </p>
        );
    }
    else {
        return null;
    }
  }
} 

export default withLDConsumer()(WorseClock);
