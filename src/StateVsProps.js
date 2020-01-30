import React from 'react';
import PropTypes from 'prop-types'
import './App.css';

//There are a few good use cases for refs:
//    Managing focus, text selection, or media playback.
//    Triggering imperative animations.
//    Integrating with third - party DOM libraries.

class Header extends React.Component {

    render() {
        return (
            <div>
                <p>Hello there, {this.props.firstName} {this.props.lastName}</p>
                <button onClick={this.props.updateName}>Update Name</button>
            </div>
        )
    }
}
Header.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
}
Header.defaultProps = {
    firstName: "Firstly",
    lastName: "Lastly",
}

class StatesVsProps extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "Eric",
            nameToggle: true,
            HHeader: new Header(),
        }
    }

    updateState() {
        if (this.state.nameToggle) {
            this.setState({
                firstName: "Derek",
                nameToggle: false,
            })
        }
        else {
            this.setState({
                firstName: "Eric",
                nameToggle: true,
            })
        }
    }

	render() {
		return (
            <h1 style={{ color: 'white' }}>
                <Header firstName={this.state.firstName} lastName="Noson" updateName={this.updateState.bind(this)} />
                <Header firstName={"Thad"} lastName="Nobody" updateName={this.updateState.bind(this)} />
                <Header firstName={"Jabris"} lastName="Noso" updateName={this.updateState.bind(this)} />
                <Header firstName={"YoBoi"} lastName="Noooo" updateName={this.updateState.bind(this)} />
                <Header firstName={this.state.firstName[0]} lastName="Noono" updateName={this.updateState.bind(this)} />
            </h1>
        )
    }
}
export default StatesVsProps;

//<div>
//    {this.state.HHeader.render()}
//</div>