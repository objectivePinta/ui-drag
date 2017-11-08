import React,{Component} from 'react';

class SpecialInputBox extends Component {

    constructor(props,context) {
        super(props,context);
        this.onInputValueChange = this.onInputValueChange.bind(this);
        this.onLeavingInput = this.onLeavingInput.bind(this);
        this.state = {inputValue:'', caption: '', captionWithName: ''};
    }

    onInputValueChange(event) {
        this.setState({caption: '', captionWithName: ''});
        this.setState({inputValue: event.target.value});
    }

    onLeavingInput(event) {
        this.setState({caption: `Martzafoaico, somaldoaco! Afaaraaaa !! AAFFAAAARAA!`});
        this.setState({captionWithName: `O sa trimit politia dupa tine, ${this.state.inputValue}!`});
        console.log(this.state);
    }

    render() {
        return (
        <div>    
        <p> this is a special input box. just type your name and you will be happy</p>
        <input value={this.state.inputValue} type='text' onChange={this.onInputValueChange} onBlur={this.onLeavingInput} />
        <h1>{this.state.caption}</h1>    
        <p>{this.state.captionWithName}</p>
        </div>
        );
    }
}

export default SpecialInputBox;