import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import blank from './CardImages/blank.png';
import fin   from './CardImages/fin.png';
import card1 from './CardImages/1.png';
import card2 from './CardImages/2.png';
import card3 from './CardImages/3.png';
import card4 from './CardImages/4.png';

let cardList = [
    card1, card2, card3, card4
]

function refreshDeck() {
    cardList = [
        card1, card2, card3, card4
    ]

    return blank;
}

function drawCard() {

    let retImage = fin;

    if (cardList.length > 0) {

        let randomNum = Math.floor(Math.random() * cardList.length);

        console.log("randomNum:" + randomNum);

        retImage = cardList[randomNum];

        cardList.splice(randomNum, 1);
    }
    return retImage;
}


function App() {

    const [cardImage, setImage] = useState(blank);

    return (

        <Router basename="/myapp1/build">
            <div>
                <img src={cardImage} alt="logo" style={{ width: '100vmin', height: '70vmin'}} />
                <button onClick={() => { setImage(drawCard()) }} >Draw a Card</button>
                <button onClick={() => { setImage(refreshDeck()) }} >Refresh Cards</button>
            </div>
            <div>
                <p>
                    Randomly selects a flashcard and then removes it from the active list 
                    until the user clicks the refresh button.
                </p>
            </div >
        </Router>

    );
}

export default App;