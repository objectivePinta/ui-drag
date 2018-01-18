import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './label.css';

class Label extends Component {

   render() {
       return <label for={this.props.for}>{this.props.text}{this.props.required && <span className='red'>*</span>}</label>
   }

}

Label.propTypes = {
    for: PropTypes.string,
    text: PropTypes.string.isRequired,
    required: PropTypes.bool
};

export default Label;