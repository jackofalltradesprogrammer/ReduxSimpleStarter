import React from 'react'; // we need React because JSX uses react to render

// A functional component vs a class component to keep track of data entered using ES6 class
// const SearchBar = () => {
//     return <input />
// };

// a class that gets functionality of component super class of React
class SearchBar extends React.Component{
    render() { // Must method to render component and returns JSX
        return <input />;
    }
}

export default SearchBar;