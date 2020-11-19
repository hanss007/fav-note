import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { select } from '@storybook/addon-knobs';
import Button from './Button';

const label = 'Colors';
const options = {
  Red: 'red',
  Blue: 'blue',
  Yellow: 'yellow',
  Rainbow: ['red', 'orange', 'etc'],
  None: null,
};
const defaultValue = 'red';
const groupId = 'GROUP-ID1';

const value = select(label, options, defaultValue, groupId);

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
