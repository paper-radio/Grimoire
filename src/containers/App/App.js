import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import WeightTracker from "../WeightTracker/WeightTracker";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <WeightTracker />
                </Layout>
            </div>
        );
    }
}

export default App;
