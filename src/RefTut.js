import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

//There are a few good use cases for refs:
//    Managing focus, text selection, or media playback.
//    Triggering imperative animations.
//    Integrating with third - party DOM libraries.

class RefTut extends React.Component {

    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
        this.clearTextInput = this.clearTextInput.bind(this);
    }

    focusTextInput() {
        this.textInput.current.focus();
    }

    clearTextInput() {
        this.textInput.current.value = "";
    }

    render() {
        return (
            <Router basename="/myapp1/build">
                <div>
                    <h1 className="RefTut-header">This is the Ref example</h1>
                    <input type="text" ref={this.textInput} />
                    <input type="button" value="Focus the text input" onClick={this.focusTextInput} />
                </div>
            </Router>
        );
    }
}

class AutoFocusOnTextInput extends React.Component{
    constructor(props) {
        super(props);
        this.textInputClass = React.createRef();
    }

    componentDidMount() {
        this.textInputClass.current.focusTextInput();
    }

    render() {
        return (
            <Router basename="/myapp1/build">
                <div>
                    <RefTut ref={this.textInputClass} />
                </div>
            </Router>
        )
    }
}
export default AutoFocusOnTextInput;
