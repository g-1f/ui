import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { [ComponentName] } from './[componentName]';

const meta: Meta<typeof [ComponentName]> = {
  title: '[Category]/[ComponentName]',
  component: [ComponentName],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof [ComponentName]>;

export const Default: Story = {
  args: {
    // Define default props here
  },
};