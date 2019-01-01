import React from 'react'; // Need React libary to create and manage our components
import ReactDOM from 'react-dom'; // To interact with actual DOM

// Create a new component. This component should produce 
// some html. A component is a function or an object that returns some amount of html
const App = () => {    // const is declaring a variable but it's constant and is never going to change
    return <div>Hi!</div>;  // stuff that looks like html
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));