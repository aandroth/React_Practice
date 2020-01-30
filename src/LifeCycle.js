import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

class LifeCycle extends React.Component {

    constructor(props) {
        super(props);
        this.output = [];
        this.output.push(< p > Constructor called</p >);
        this.elem = <p></p>;
        this.state = {
            previousChildren: null,
            pointerEvents: true,
            pathname: '',
            count: 7777,
        };
    }

    //getDefaultProps() {
    //    this.output += "getDefaultProps called\n";
    //}

    //getInitialState() {
    //    this.output += "getInitialState called\n";
    //}

    static getDerivedStateFromProps(a, state) {
        //this.output.push(<p>getDerivedStateFromProps called</p>);
        return null;
    }

    componentDidMount() {
        this.output.push(<p>componentDidMount called</p>);
        alert("componentDidMount");
    }

    //shouldComponentUpdate() {
    //    this.output.push(<p>shouldComponentUpdate called</p>);
    //}

    getSnapshotBeforeUpdate() {
        this.output.push(<p>getSnapshotBeforeUpdate called</p>);
        alert("getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        this.output.push(<p>componentDidUpdate called</p>);
        alert("componentDidUpdate");
    }

    pushNewElementToPage() {
        this.elem = <p>{(new Date()).getSeconds()}</p>;
        this.forceUpdate();
    }

    render() {
        this.output.push( < p > Render called</p >);
        return (
            <Router basename="/myapp1/build">
                <div>
                    <input type="button" onClick={() => this.pushNewElementToPage()} />
                    {this.output}
                    {this.elem}
                    {this.state.count}
                </div>
            </Router>
        );
    }
}

export default LifeCycle;
