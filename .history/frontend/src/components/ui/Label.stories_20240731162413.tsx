import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Label } from './label';

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Default Label',
  },
};

export const WithCustomClass: Story = {
  args: {
    children: 'Custom Class Label',
    className: 'text-blue-500 font-bold',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Label',
    className: 'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  },
};