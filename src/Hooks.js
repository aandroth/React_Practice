import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

function Hooks() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = 'You clicked ' + count + ' times';
    });

    let [val, setVal] = useState(10);

    return (
        < Router basename="/myapp1/build" >
            <p>
                Uses React hooks to update the buttons when they are clicked.<br/>
                Also updates the tab for the page using React useEffect
            </p>
            <button onClick={() => { setCount(count + 1) }} >{count}</button>
            <button onClick={() => { setVal(7777) }} >{val}</button>
        </Router >
    );
}

export default Hooks;
