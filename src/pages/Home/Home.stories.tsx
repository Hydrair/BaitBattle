import React from 'react';
import { Story } from '@storybook/react';
import { Home, HomeProps } from './Home';

export default {
  title: 'Pages/Home',
  component: Home,
  argTypes: {
  },
};

const Template: Story<HomeProps> = ({ ...args }) => (
  <Home  {...args} />
);

export const Default = Template.bind({});