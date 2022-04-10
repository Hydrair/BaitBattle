import React from 'react';
import { Story } from '@storybook/react';
import { UserCard, UserCardProps } from './UserCard';

export default {
  title: 'Components/UserCard',
  component: UserCard,
  argTypes: {
  },
};

const Template: Story<UserCardProps> = ({ ...args }) => (
  <UserCard  {...args} />
);

export const Default = Template.bind({});