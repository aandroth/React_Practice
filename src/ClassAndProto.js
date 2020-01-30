import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";

function ProtoCat(name){
	this.name = name;
}
ProtoCat.prototype.speak = function meow(){
	return (this.name + ": meow");
}

function ProtoDog(name) {
    this.name = name;
    this.superpower = "WOOF!";
}
ProtoDog.prototype.speak = function bark() {
    return (this.name + ": bark bark bark");
}

class SuperCat extends ProtoCat{
	constructor(name){
		super(name);
        this.superpower = "ROAR!";
	}
	speak(){// Do we need this? We do not. We can call the speak fn from ProtoCat without this.
		return super.speak();
	}
	static MegaMeow(){
		return ("MEEOOWW!!!");
	}
}

class PrototypeBlock extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: this.props.BGcolor, width: '150px', float: this.props.placement }}>
                <h1 style={{ float: 'none', left: '15px' }} >{this.props.title}</h1>
                <h2>{this.props.character0}</h2>
                <button onClick={this.props.speakFn0}>{this.props.speakName0}</button>
                <button onClick={this.props.deleteFn0}>{this.props.deleteName0}</button>
            </div>
        )
    }
}

class ClassAndProto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cat0: "Nermal",
            cat1: "Garfield",
            dog0: "Odie",
            superCat0: "Super Nermal",
            catPtr0: new ProtoCat("Nermal"),
            catPtr1: new ProtoCat("Garfield"),
            dogPtr0: new ProtoDog("Odie"),
            superCatPtr0: new SuperCat("SuperNermal"),
            catOutput0: "",
            catDogOutput: "",
            superCatOutput0: "",
        }
    }

    // Fns to show effects of deleting the Prototype's fn through an instance
    callCatMeow(catPtr) {
        if (catPtr.speak) {
            this.setState({
                catOutput0: catPtr.speak(),
            })
        }
        else {
            this.setState({
                catOutput0: "There is no meow fn!"
            });
        }
    }

    deleteCatMeow(catPtr) {
        this.setState({
            catOutput0: ""
        });
        delete catPtr.__proto__.speak;
    }

    reset0() {
        this.setState({
            catOutput0: "",
        });
        ProtoCat.prototype.speak = function meow() {
            return (this.name + ": meow");
        };
    }

    // Fns to show the effects of changing an instance's base Prototype
    callSpeak(animPtr) {
        if (animPtr.speak) {
            this.setState({
                catDogOutput: animPtr.speak(),
            })
        }
        else {
            this.setState({
                catDogOutput: "There is no speak fn!"
            });
        }
    }

    reassignPrototypeToOther(leftPtr, rightPtr) {
        this.setState({
            catDogOutput: ""
        });
        leftPtr.__proto__ = rightPtr.__proto__;
    }

    reset1() {
        this.setState({
            catPtr1: new ProtoCat("Garfield"),
            dogPtr0: new ProtoDog("Odie"),
            catDogOutput: "",
        })
    }

    // Fns to show the effects of using a Class that extends the Prototype
    callSuperSpeak(animPtr) {
        if (animPtr.speak) {
            this.setState({
                superCatOutput0: animPtr.speak(),
            })
        }
        else {
            this.setState({
                superCatOutput0: "There is no speak fn!",
            });
        }
    }

    // This changes the ProtoCat to ProtoDog for this instance of SuperCat
    // It doesn't affect the SuperCat class or any of the methods of the SuperCat class
    reassignSuperCatPrototypeToDog(superCatPtr) {
        this.setState({
            superCatOutput0: "",
        });
        superCatPtr.__proto__ = ProtoDog.prototype;
    }

    // This does exactly what it says. It replaces the Prototype that the SuperCat class derives from with the ProtoDog Prototype.
    // This means that even after doing a reset to reassign a SuperCat instance to the SuperCat class, that it will still derive from ProtoDog
    reassignSuperCatClassPrototypeToDog(superCatPtr) {
        this.setState({
            superCatOutput0: "",
        });
        superCatPtr.__proto__.__proto__ = ProtoDog.prototype;
    }

    callSuperCatMeow(superCatPtr) {
        this.setState({
            superCatOutput0: SuperCat.MegaMeow(),
        });
    }

    callSuperCatPower(superCatPtr) {
        this.setState({
            superCatOutput0: superCatPtr.superpower,
        })
    }

    reset2() {
        this.setState({
            superCatPtr0: new SuperCat("Super Nermal"),
            superCatOutput0: "",
        });
    }

    reset3() {
        this.state.superCatPtr0.__proto__.__proto__ = ProtoCat.prototype;
        this.setState({
            superCatPtr0: new SuperCat("Super Nermal"),
            superCatOutput0: "",
        });
    }

    classyTest() {
        var aCat = new SuperCat("a");
        var bCat = new SuperCat("b");
        var cCat = new ProtoCat("c");
        aCat.newFn0 = () => { return aCat.speak(); }                       // Aimed at the instance aCat, can be called by a
        aCat.__proto__.newFn1 = () => { return aCat.speak(); }             // Aimed at the SuperCat Class, can be called by a, b
        aCat.__proto__.__proto__.newFn2 = () => { return aCat.speak(); }   // Aimed at the ProtoCat Prototype, can be called by a, b, c
        alert(aCat.newFn0());
        alert(aCat.newFn1() +", "+ bCat.newFn1());
        alert(aCat.newFn2() + ", " + bCat.newFn2()+", "+cCat.newFn2());
    }


    render() {
        return (
            <Router basename="/myapp1/build">
                <div>
                    <h1 >This is the Prototype example</h1>
                    <div style={{ overflow: 'hidden' }}>
                        <h2 >Prototypes share the base's functions and deleting that through one deletes it for all.</h2>
                        <PrototypeBlock
                            title="fnCat"
                            character0={this.state.cat0}
                            BGcolor='grey'
                            placement='left'
                            speakFn0={() => this.callCatMeow(this.state.catPtr0)}
                            deleteFn0={() => this.deleteCatMeow(this.state.catPtr0)}
                            speakName0={this.state.cat0 + " speak"}
                            deleteName0={"Delete .speak"}
                        />
                        <PrototypeBlock
                            title="fnCat"
                            character0={this.state.cat1}
                            BGcolor='orange'
                            placement='left'
                            speakFn0={() => this.callCatMeow(this.state.catPtr1)}
                            deleteFn0={() => this.deleteCatMeow(this.state.catPtr1)}
                            speakName0={this.state.cat1 + " speak"}
                            deleteName0={"Delete .speak"}
                        />
                        <div style={{ float: 'left' }}>
                            <button onClick={this.reset0.bind(this)}>RESET</button>
                            <h3>{this.state.catOutput0}</h3>
                        </div>
                    </div>
                    <div style={{ overflow: 'hidden' }}>
                        <h2 >Prototype instances can have their base Prototype changed.</h2>
                        <PrototypeBlock
                            title="fnDog"
                            character0={this.state.dog0}
                            BGcolor='tan'
                            placement='left'
                            speakFn0={() => this.callSpeak(this.state.dogPtr0)}
                            deleteFn0={() => this.reassignPrototypeToOther(this.state.dogPtr0, this.state.catPtr1)}
                            speakName0={this.state.dog0 + " speak"}
                            deleteName0={"Change Prototype to " + this.state.cat1 + "'s"}
                        />
                        <PrototypeBlock
                            title="fnCat"
                            character0={this.state.cat1}
                            BGcolor='orange'
                            placement='left'
                            speakFn0={() => this.callSpeak(this.state.catPtr1)}
                            deleteFn0={() => this.reassignPrototypeToOther(this.state.catPtr1, this.state.dogPtr0)}
                            speakName0={this.state.cat1 + " speak"}
                            deleteName0={"Change Prototype to " + this.state.dog0 + "'s"}
                        />
                        <div style={{ float: 'left' }}>
                            <button onClick={this.reset1.bind(this)}>RESET</button>
                            <h3>{this.state.catDogOutput}</h3>
                        </div>
                    </div>
                    <div style={{ overflow: 'hidden' }}>
                        <h2 >Classes can extend Prototypes which gives them two levels of Prototypes.</h2>
                        <PrototypeBlock
                            title="Super Cat"
                            character0={this.state.superCat0}
                            BGcolor='red'
                            placement='left'
                            speakFn0={() => this.callSuperSpeak(this.state.superCatPtr0)}
                            deleteFn0={() => this.reassignSuperCatPrototypeToDog(this.state.superCatPtr0)}
                            speakName0={this.state.superCat0 + " speak"}
                            deleteName0={"Change Prototype to Dog"}
                        />
                        <div style={{ flexFlow: 'column' }}>
                            <button style={{ display: 'block' }} onClick={this.callSuperCatPower.bind(this, this.state.superCatPtr0)}>Super Power</button>
                            <button style={{ display: 'block' }} onClick={this.callSuperCatMeow.bind(this, this.state.superCatPtr0)}>Super Meow</button>
                            <button style={{ display: 'block' }} onClick={this.reassignSuperCatClassPrototypeToDog.bind(this, this.state.superCatPtr0)}>Change SuperCat Class Prototype to ProtoDog</button>
                            <button style={{ display: 'block' }} onClick={this.reset2.bind(this)}>RESET the SuperCat instance to SuperCat Class</button>
                            <button style={{ display: 'block' }} onClick={this.reset3.bind(this)}>RESET the SuperCat class to ProtoCat</button>
                            
                            <h3 >{this.state.superCatOutput0}</h3>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
//<button style={{ display: 'block' }} onClick={this.classyTest.bind(this)}>Classy Test</button>
export default ClassAndProto;


					//<button type="button" onClick={() => {this.createSuperCatAndMeow()}}>Cats meow</button>