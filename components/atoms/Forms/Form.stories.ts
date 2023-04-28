import type { Meta, StoryObj } from '@storybook/react';

import Input from './index';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Input> = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    type: 'text',
  },
};

export const Checkbox: Story = {
  args: {
    type: 'checkbox',
  },
};

export const Date: Story = {
  args: {
    type: 'date',
  },
};
