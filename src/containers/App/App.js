import React, { Component } from "react";
import WeightTracker from "../WeightTracker/WeightTracker";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <WeightTracker />
            </div>
        );
    }
}

export default App;
