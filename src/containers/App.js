import React from 'react';
import Searchbox from '../components/Searchbox';
import CardList from '../components/CardList';
// import { robots } from './robots';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            // robots: robots,
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }))
    }

    onSearchChanged = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        if (this.state.robots.length === 0) {
            return (<h1>Loading robots list</h1>);
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <Searchbox searchChange= { this.onSearchChanged } />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots= { filteredRobots } />
                        </ErrorBoundary>
                    </Scroll>
                    <Footer />
                </div>
            );
        }
    };
};

export default App;
