import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './RoutingTut.css';
import App from './App';
import FormField from './FormField';
import ClassAndProto from './ClassAndProto';
import AutoFocusOnTextInput from './RefTut';
import EventTuts from './EventTut';
import LifeCycle from './LifeCycle';
import StateVsProps from './StateVsProps';
import StatesTut from './StatesTut';
import Hooks from './Hooks';
import Roller from './ReducingRoller';
import Addon from './Addon';
import Flashcards from './FlashCards_LA';
import { downloadImageSrcFromFile } from './fns.js';
import { downloadTextFromFile } from './fns.js';

//let images = [];
//const downloadImages = () => {

//    images.push(new Image());
//    images[0].src = downloadImageSrcFromFile("586561856104");
//    images.push(new Image());
//    images[1].src = downloadImageSrcFromFile("586559053013");
//}


//const getText = async () => {
//    let retText = await downloadTextFromFile("586550002838");
//    console.log("text: " + retText);
//    if (retText) {
//        let arr = retText.split('\n');
//        let retArr = [];
//        for (let ii = 0; ii < arr.length - 1; ++ii)
//            retArr.push(arrLine(ii, arr[ii]));
//        return (
//            <ul>
//                {retArr}
//            </ul>
//        );
//    }
//    else {
//        return (
//            <div>
//            </div>
//        );
//    }
//};

    
const arrLine = ( key, line ) => {
    return (
        <li key={key}>
            <p> {line} </p>
        </li>
    );
};


const Home = () => {
    //downloadImages();
    //const [text, setText] = useState([]);

    //useEffect(async () => {
    //    const result = await getText();
    //    setText(result);
    //}, []);

    return (
        <div>
            <h2 className="RoutingTut-header">
                <p>This. Is. My. HOOOOOOME!!!!!</p>
                <p>This is just the homepage.<br />Explore the links at the top-right.</p>
            </h2>
        </div>
    );
    //downloadImage();
};


    const About = () => {
        return (
            <div>
                <h2 className="RoutingTut-header">
                    <p>This is a website containing some good learning.</p>
                    <p>Use the links on the right to go through all of the little projects.</p>
                    <p>They were created for a deeper understanding of React and Redux.</p>
                </h2>
            </div>
        );
    };

    const Contact = () => {
        return (
            <div>
                <h2>
                    <p>Contact Aaron Andrews at desk RD 02, 04 W, 90.</p>
                </h2 >
            </div>
        );
    };
/*
//<li>
//    <Link to="/about">About</Link>
//</li>
//    <li>
//        <Link to="/contact">Contact</Link>
//    </li>
                            <li>
                                <Link to="/refs">Refs</Link>
                            </li>
                            <li>
                                <Link to="/lifecycle">Lifecycle</Link>
                            </li>
                            <li>
                                <Link to="/props">Props</Link>
                            </li>
                            <li>
                                <a href="/kanban">Kanban Board</a>
                            </li>
                            <li>
                                <a href="/roller">Roller</a>
                            </li>
                            <li>
                                <a href="/addon">Addon</a>
                            </li>
                            <li>
                                <a href="/formfield">FormField</a>
                            </li>
                            <li>
                                <Link to="/states">States</Link>
                            </li>
*/
class RoutingTut extends React.Component {


    render() {
        return (
            <Router basename="/">
                <div>
                    <nav className="RoutingTut-nav">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/events">Events</Link>
                            </li>
                            <li>
                                <Link to="/classesproto">ClassAndProto</Link>
                            </li>
                            <li>
                                <Link to="/app">App</Link>
                            </li>
                            <li>
                                <a href="/hooks">Hooks</a>
                            </li>
                            <li>
                                <a href="/flashcards">Flashcards</a>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/" exact component={Home} />
                    <Route path="/props" component={StateVsProps} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/events" component={EventTuts} />
                    <Route path="/refs" component={AutoFocusOnTextInput} />
                    <Route path="/lifecycle" component={LifeCycle} />
                    <Route path="/props" component={StateVsProps} />
                    <Route path="/states" component={StatesTut} />
                    <Route path="/classesproto" component={ClassAndProto} />
                    <Route path="/app" component={App} />
                    <Route path="/hooks" component={Hooks} />
                    <Route path="/roller" component={Roller} />
                    <Route path="/addon" component={Addon} />
                    <Route path="/flashcards" component={Flashcards} />
                    <Route path="/formfield" component={FormField} />
                </div>
            </Router>
        );
    }
}

export default RoutingTut;

