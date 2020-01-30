import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import structPic from './space-struct-react.png';
import spacePic from './space-space-react.jpg';
import './App.css';

function App(){
    return (
        <Router basename="/myapp1/build">
            <div className="App">
                <header className="App-header" style={{ position: 'relative' }} >
                    <img src={spacePic} className="App-logo" alt="logo" style={{ width: '100vmin', height: '70vmin', position: 'absolute' }}/>
                    <img src={structPic} className="App-logo-rev" style={{ position: 'absolute' }}/>
                    <div style={{ top: '-120px', width: '40vmin', height: '40vmin', border: 'solid #282c34 400px', position: 'absolute' }}></div>
                    <p style={{ top: '700px', position: 'absolute' }}>
                      Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a style={{ top: '800px', position: 'absolute' }}
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn React
                    </a>
                </header>
            </div>
        </Router>
    );
}

export default App;
