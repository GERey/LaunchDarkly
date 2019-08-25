import React from 'react';
import './App.css';
import { withLDProvider } from 'launchdarkly-react-client-sdk';
import HelloWorld from './helloWorld';
import Clock from './clock';
import WorseClock from './worse_clock';
import LoginForm from './loginform';
import Timer from './timer';


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <h1>Clock App</h1>
        <HelloWorld />
        <LoginForm/>
      
        <Clock ></Clock>
        <WorseClock ></WorseClock>
        <Timer />
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



