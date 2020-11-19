import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
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

export const primary = () => {
  const label = 'Colors';
  const options = {
    Yellow: 'hsl(49, 100%, 58%)',
    Blue: 'hsl(196, 83%, 75%)',
    Green: 'hsl(106, 47%, 64%)',
  };
  const defaultValue = 'hsl(49, 100%, 58%)';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);
  return <Button>React Button</Button>;
};

export const secondary = () => <Button secondary>Button</Button>;

// .add('Primary', () => {
//   const label = 'Colors';
//   const options = {
//     Primary: 'hsl(49, 100%, 58%)',
//     Secondary: 'hsl(196, 83%, 75%)',
//     Tertiary: 'hsl(106, 47%, 64%)',
//   };
//   const defaultValue = 'hsl(49, 100%, 58%)';
//   const groupId = 'GROUP-ID1';
//   const value = select(label, options, defaultValue, groupId);
//   return <Button color={value}>Hello Roman</Button>;
// })
