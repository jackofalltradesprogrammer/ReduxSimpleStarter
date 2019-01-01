import React from 'react'; // Need React libary to create and manage our components
import ReactDOM from 'react-dom'; // To interact with actual DOM

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCa0N0I9Fb0wkUURLwSSaqV2FyidTKfF8s'; // to make request to Youtube

// Create a new component. This component should produce 
// some html. A Functional component is a function or an object that returns some amount of html
const App = () => {    // const is declaring a variable but it's constant and is never going to change
    return (
        <div>
            <SearchBar />
        </div>
    );  // stuff that looks like html
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));