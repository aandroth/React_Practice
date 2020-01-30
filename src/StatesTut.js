import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { setInterval, clearInterval } from 'timers';

class StatesTut extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            shouldRender: true
        };
        //this.destroyClock = this.destroyClock.bind(this);
    }

    componentDidMount() {
        this.timeId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        alert("Unmount called");
        clearInterval(this.timeId);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    destroyClock() {
        alert("Destroying clock");
        this.setState({
            shouldRender: false
        });
    }

    render() {
        return (
            <Router basename="/myapp1/build">
                <div>
                    <p>{this.state.shouldRender === true ? this.state.date.toLocaleTimeString() : null}</p>
                    <input type="button" value="DESTROY" onClick={this.destroyClock.bind(this)} />
                </div>
            </Router>
        );
    }
}

export default StatesTut;
