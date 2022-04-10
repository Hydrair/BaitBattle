---
to: src/components/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.stories.tsx
---
import React from 'react';
import { Story } from '@storybook/react';
import { <%= h.changeCase.pascalCase(name) %>, <%= h.changeCase.pascalCase(name) %>Props } from './<%= h.changeCase.pascalCase(name) %>';

export default {
  title: 'Components/<%= h.changeCase.pascalCase(name) %>',
  component: <%= h.changeCase.pascalCase(name) %>,
  argTypes: {
  },
};

const Template: Story<<%= h.changeCase.pascalCase(name) %>Props> = ({ ...args }) => (
  <<%= h.changeCase.pascalCase(name) %>  {...args} />
);

export const Default = Template.bind({});