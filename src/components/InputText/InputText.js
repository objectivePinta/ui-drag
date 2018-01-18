import React, {Component} from 'react';

class InputText extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <input
         type='text'
         minLength ={this.props.minLength}
         onChange={this.props.onChange} 
         value={this.props.value} 
         onBlur={this.props.onBlur}
         />
    }


}

export default InputText;