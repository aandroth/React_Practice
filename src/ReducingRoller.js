import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

function Hooks() {

    let initList = [];
    for (let ii = 0; ii < 20; ++ii)
        initList.push(ii + 1);
    const [count, setCount] = useState(initList);
    const [result, setResult] = useState(20);


    let rollDie = () => {
        let idx = Math.floor(Math.random() * count.length);
        setResult(count[idx]);
        console.log(result);
        let temp = count;
        temp.splice(idx, 1);
        setCount(temp);
    }

    let out = () => {
        for (let ii = 0; ii < count.length; ++ii)
            console.log(count[ii]);
    }

            //<div>
            //    {document.URL}
            //</div>
            //<div>
            //    {window.location.href}
            //</div>

    return (
        < Router basename="/myapp1/build" >
            <button onClick={() => { rollDie() }} >Rolled {result}</button>
            <button onClick={() => { out() }} >list</button>
        </Router >
    );
}

export default Hooks;
