import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

class MovingSquare extends React.Component {

	constructor(props) {
		super(props);
		this.posX = 50;
		this.posY = 50
		this.doKeyDown = false;
		this.riKeyDown = false;
		this.upKeyDown = false;
		this.leKeyDown = false;

		this.getInput = this.getInput.bind(this);
		this.drawMySquare = this.drawMySquare.bind(this);
		this.wipeMyCanvas = this.wipeMyCanvas.bind(this);
		this.newFrame = this.newFrame.bind(this);
		this.handleKeyDown= this.handleKeyDown.bind(this);
		this.handleKeyUp= this.handleKeyUp.bind(this);
	}

	getInput() {
		var moveSpeed = 5;
		if(this.doKeyDown)
			this.posY += moveSpeed;
		if(this.riKeyDown)
			this.posX += moveSpeed;
		if(this.upKeyDown)
			this.posY -= moveSpeed;
		if(this.leKeyDown)
			this.posX -= moveSpeed;
	}

	drawMySquare() {
        var c = document.getElementById("myC");
        if (c) { // Had to add this in, otherwise c is null and throws an error when navigating away from the page
            var ctx = c.getContext("2d");
            ctx.fillStyle = "#000000";
            ctx.fillRect(this.posX, this.posY, 100, 100);
        }
	}

	wipeMyCanvas() {
        var c = document.getElementById("myC");
        if (c) { // Had to add this in, otherwise c is null and throws an error when navigating away from the page
            var ctx = c.getContext("2d");
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(0, 0, 500, 500);
        }
	}

	newFrame(){
		this.getInput();
		this.wipeMyCanvas();
		this.drawMySquare();
	}

	handleKeyDown(event){
		if(event.keyCode === 40){ // down arrow
			this.doKeyDown = true;
		}
		if(event.keyCode === 39){ // right arrow
			this.riKeyDown = true;
		}
		if(event.keyCode === 38){ // top arrow
			this.upKeyDown = true;
		}
		if(event.keyCode === 37){ // left arrow
			this.leKeyDown = true;
		}
	}

	handleKeyUp(event){
		if(event.keyCode === 40){ // down arrow
			this.doKeyDown = false;
		}
		if(event.keyCode === 39){ // right arrow
			this.riKeyDown = false;
		}
		if(event.keyCode === 38){ // top arrow
			this.upKeyDown = false;
		}
		if(event.keyCode === 37){ // left arrow
			this.leKeyDown = false;
		}
	}

	componentDidMount(){
		setInterval(this.newFrame, 10);
		document.getElementById("canvas-div").focus();
	}

	componentWillUpdate(){
		this.newFrame();
		alert("update");
	}

	render() {
		return (
            <Router basename="/myapp1/build">
                <div id="canvas-div" onKeyDown={this.handleKeyDown} onKeyUp={this.handleKeyUp} tabIndex="0" style={{ outline: 0 }}>
					<canvas id="myC" width="500" height="500" style={{border:'1px solid #000000'}} />
				</div>
            </Router>
        );
	}
}

class EventTuts extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
        return (
            <div>
                <div>
                    <MovingSquare />
                </div>
                <div>
                    <p> Use the Arrow keys to move the square </p>
                </div>
            </div>
        )
            }
}
export default EventTuts;
