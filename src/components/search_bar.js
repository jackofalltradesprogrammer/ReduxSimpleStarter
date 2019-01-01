import React, { Component } from 'react'; // we need React because JSX uses react to render
// {} braces mean pull out Component and assign it to the variable Component

// A functional component vs a class component to keep track of data entered using ES6 class
// const SearchBar = () => {
//     return <input />
// };

// a class that gets functionality of component super class of React
class SearchBar extends Component {
    render() { // Must method to render component and returns JSX
        return <input onChange={event => console.log(event.target.value)}/>; // add event "onChange" to the element with OnInputChange() event handler
    }   
}

export default SearchBar;