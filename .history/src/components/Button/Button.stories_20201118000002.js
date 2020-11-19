import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

// storiesOf('Button', module)
//   .add('Primary', () => <Button>Hello</Button>)
//   .add('Secondary', () => <Button secondary>Hello hello</Button>);

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const primary = () => <Button>React Button</Button>;
export const secondary = () => <Button secondary>Button</Button>;
