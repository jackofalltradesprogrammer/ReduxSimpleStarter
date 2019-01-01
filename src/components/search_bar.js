import React, { Component } from 'react'; // we need React because JSX uses react to render
// {} braces mean pull out Component and assign it to the variable Component

// A functional component vs a class component to keep track of data entered using ES6 class
// const SearchBar = () => {
//     return <input />
// };



// a class that gets functionality of component super class of React
class SearchBar extends Component {
    // define State of a component class
    constructor(props) {
        super(props); // calling the constructor of  super Component of REACT class

        this.state = { term: ''}; // Record property "term" in the state ** this syntax is not used again in the class
    }
    render() { // Must method to render component and returns JSX
        // change the "term" property in state of the object 
        return (
            // add event "onChange" to the element with  event handler
            <div>            
                <input onChange={event => this.setState({term: event.target.value})} />
            </div>
        ); 
    }   
}

export default SearchBar;