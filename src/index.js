import React, {Component} from 'react'; // Need React libary to create and manage our components
import ReactDOM from 'react-dom'; // To interact with actual DOM
import YTSearch  from 'youtube-api-search'; // libarary to search item 
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCa0N0I9Fb0wkUURLwSSaqV2FyidTKfF8s'; // to make request to Youtube

// Create a new component. This component should produce 
// some html. A Functional component is a function or an object that returns some amount of html
// we need a class component so it  can record the state of an object
class App extends Component {    // When app boots up, Constructor will be loaded first 
    constructor(props)  {
        super(props);
         
        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({videos}); // in ES6 it  translates to "this.setState({videos: videos});" Only works with same field names
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
                {/* // Pass data from parent component to child component
                    passing data in React is called props */}
                <VideoList videos={this.state.videos} />
            </div>
        );  // JSX stuff that looks like html with Babel & WebPack
    }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));