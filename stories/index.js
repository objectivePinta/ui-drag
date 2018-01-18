import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Label from '../src/components/Label/Label';
import InputText from '../src/components/InputText/InputText';
let inputValue = '';

storiesOf('Button', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello Button</button>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ));
  storiesOf('Label', module)
  .add('required', () => (
    <Label text='Random label' required/>
  ))
  .add('not required', () => (
      <Label text='Random label'/>
  ));

  storiesOf('InputText', module)
  .add('required', () => (
    <InputText onChange={e => {console.log(e.target.value); console.log(inputValue); inputValue += e.target.value;}} value={'andrei'}/>
  ))
 

