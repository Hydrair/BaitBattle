import React from 'react';
import { Story } from '@storybook/react';
import { Badge, BadgeProps } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
  },
};

const Template: Story<BadgeProps> = ({ ...args }) => (
  <Badge  {...args} />
);

export const Default = Template.bind({});