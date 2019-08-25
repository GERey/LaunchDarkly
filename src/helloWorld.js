import React from 'react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';



const HelloWorld = ({ flags }) => {

    if(flags.georgeTempHelloWorldTempAugust){
        return <div>Hello World!!!</div>;  
    }
    return null;

};

export default withLDConsumer()(HelloWorld);