import React, { Component } from 'react';
import './App.css';
import UserBoard from './components/UserBoard'
import Clock from './components/Clock'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                </header>

                <main>
                    <UserBoard />
                    <Clock />
                </main>
            </div>
        );
    }
}

export default App;
