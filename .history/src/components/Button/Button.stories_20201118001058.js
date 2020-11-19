import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

// storiesOf('Button', module)
//   .add('Primary', () => <Button>Hello</Button>)
//   .add('Secondary', () => <Button secondary>Hello hello</Button>);

export default {
  title: 'Components/Button',
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const primary = () => <Button>React Button</Button>;
export const secondary = () => <Button secondary>Button</Button>;
