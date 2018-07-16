import React, { Component } from "react";
import WeightTracker from "../WeightTracker/WeightTracker";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <WeightTracker />
                <Footer />
            </div>
        );
    }
}

export default App;
