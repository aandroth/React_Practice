import React from 'react';

const COLORS = Object.freeze({ "RED":1, "GREEN":2, "BLUE":3});

class Addon extends React.Component {


    render() {
        return (
            <div>
                <p>{COLORS.BLUE}</p>
                <button>Clicking me does nothing!</button>
            </div>
        );
    }

}

export default Addon;