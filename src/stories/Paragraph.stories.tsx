import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Paragraph from '../ui/atoms/Paragraph';

export default {
  title: 'Example/Paragraph',
  component: Paragraph,
} as Meta;

const Template: Story = (args) => <Paragraph {...args}>Sample text for you</Paragraph>;

export const Primary = Template.bind({});
Primary.args = {};