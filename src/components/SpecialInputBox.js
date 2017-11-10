import React,{Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import './SpecialInputBox.css';

class SpecialInputBox extends Component {

    constructor(props,context) {
        super(props,context);
        this.onInputValueChange = this.onInputValueChange.bind(this);
        this.onLeavingInput = this.onLeavingInput.bind(this);
        this.state = {inputValue:'', isChanging: false};

    }

    onInputValueChange(event) {
        this.setState({inputValue: event.target.value, isChanging:true});
    }

    onLeavingInput(event) {
        this.setState({isChanging:false});
    }

    render() {
        return (
        <div>
         <AppBar title='The Reviews app' children={<h1>WOW</h1>} className='.appbar' />   
        <input value={this.state.inputValue} type='text' onChange={this.onInputValueChange} onBlur={this.onLeavingInput} />
         <p>{this.state.isChanging ? this.state.inputValue : this.state.inputValue.toUpperCase() }</p>
         <RaisedButton label="What the fuck?"  />
        </div>
        );
    }
}

export default SpecialInputBox;