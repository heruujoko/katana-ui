import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Title from '../ui/atoms/Title';

export default {
  title: 'Example/Title',
  component: Title,
} as Meta;

const Template: Story = (args) => <Title {...args}>Sample title for you</Title>;

export const Primary = Template.bind({});
Primary.args = {};