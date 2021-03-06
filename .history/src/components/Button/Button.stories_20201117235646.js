import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

// storiesOf('Button', module)
//   .add('Primary', () => <Button>Hello</Button>)
//   .add('Secondary', () => <Button secondary>Hello hello</Button>);

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const primary = () => <Button>React Button</Button>;
secondary = () => <Button secondary>Button</Button>;
