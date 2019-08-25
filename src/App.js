import React from 'react';
import './App.css';
import { withLDProvider } from 'launchdarkly-react-client-sdk';
import HelloWorld from './helloWorld';
import Clock from './clock';
import WorseClock from './worse_clock';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld />

      
        <Clock ></Clock>
        <WorseClock ></WorseClock>
        // test
      </header>
    </div>
  );
}

export default withLDProvider({ 
  clientSideID: '5d61888d06f6eb087822fa31',
  user: {
      "key": "user_key",
      "name": "User Name",
      "email": "User@email.com"
  }
})(App);


