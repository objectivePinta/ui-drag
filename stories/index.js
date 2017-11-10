import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SpecialInputBox from '../src/components/SpecialInputBox';

storiesOf('Button', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello Button</button>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ));

  storiesOf('SpecialInputBox', module)
  .add('with text', () => (
    <SpecialInputBox />
  ))
