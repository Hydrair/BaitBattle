import React from 'react';
import { Story } from '@storybook/react';
import { Register, RegisterProps } from './Register';

export default {
  title: 'Pages/Register',
  component: Register,
  argTypes: {
  },
};

const Template: Story<RegisterProps> = ({ ...args }) => (
  <Register  {...args} />
);

export const Default = Template.bind({});