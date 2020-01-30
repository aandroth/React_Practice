import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

class FormField extends React.Component {

	handleClick = (message) => {
		alert(message);
	}

	render (){
		return (
			<Router basename="/myapp1/build">
				<button className="std_button" onClick={() => {this.handleClick("Roger?")}}/> 
			</Router>
		);
	}
}

export default FormField;
