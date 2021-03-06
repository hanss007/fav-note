import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

// storiesOf('Button', module)
//   .add('Primary', () => <Button>Hello</Button>)
//   .add('Secondary', () => <Button secondary>Hello hello</Button>);

// export default {
//   title: 'Example/Button',
//   component: Button,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// };

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'React button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};
