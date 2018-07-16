import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import "./WeightTracker.css";

class WeightTracker extends Component {
    render() {
        return (
            <Aux>
                <div>Weight loss graph</div>
                <div>weight loss entry</div>
            </Aux>
        );
    }
}

export default WeightTracker;
