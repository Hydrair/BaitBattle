import React from 'react';
import { Story } from '@storybook/react';
import { View, ViewProps } from './View';

export default {
  title: 'Components/View',
  component: View,
  argTypes: {
  },
};

const Template: Story<ViewProps> = ({ ...args }) => (
  <View  {...args} />
);

export const Default = Template.bind({});