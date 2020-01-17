This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## How to Run

### Requirements
You'll need to have at least the following installed on your computer: 

- Nodejs
- React 16.9


### Running the application

### How to bootstrap application

- Git Clone the directory
- Run `npm install`
- Run `npm start`

The above steps run the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits to the code.<br>
You will also see any lint errors in the console.

### `npm test`

-  Run 'npm test'

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## What does this do?

This is a single page web application that is meant to highlight how to use boolean feature flags within a React application.
It is also meant to be the start of a Clock Application. Once you 'login' (functionality doesn't yet work), then you'll get
feature flagged access to the two main features of this application. The first main feature is a clock that updates in realtime.
The other is a timer that starts counting with a button that you press. 

## How much time did it take.
This was roughly built off of the tutorial that was provided by Launch Darkly. Once off the happy path, I started adding features from various examples around the web. Thus the core of the app took roughly 2 hours. I consider this to be a good set of time given my lack of knowledge around React ( this being my first application in React). Adding the feature flags proper, and validating and testing ( including writing this readme ) took another 2 hours. 

## Why did you choose React if you didn't have experience with it?
It made a good learning exercise, and due to the example auto-reloading it made it really easy to iterate locally and see the results.  

## What would I do if I had more time.

The two most important features that I think are missing are
- User integration
    - I would like to be able to make sure I could track each user that goes through the login flow, and thus being able to market to them from the launch darkly application. 
- Proper Login Page
    - I would gate the features not just behind feature flags, but behind the login page as well. That way it would make more sense to why users are 
    entering their information. As it stands, there isn't really incentive for anybody to add their data to the login page. 
- Write Tests and integrate into CI
    - My CircleCI builds are failing, and I haven't written any tests, thus with more time I would implement CI in a proper format as well as write more tests.

- Ask for access to Groups in Launch Darkly
    - My initial scope for this was to try to A/B test the two different clocks and have that be a validation test for having something update in realtime. That being said, I finished this on a sunday and didn't want to wait for the turn around time to be whitelisted. I also ran out of time. 

Please reach out to me directly if you'd like feedback on what the onboarding process was like. 
