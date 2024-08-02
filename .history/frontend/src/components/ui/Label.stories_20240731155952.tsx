import React from 'react';
   import { Meta, StoryObj } from '@storybook/react';
   import { Label } from './label';

   const meta: Meta<typeof Label> = {
     title: 'Components/Label',
     component: Label,
     argTypes: {
       children: { control: 'text' },
       className: { control: 'text' },
     },
   };

   export default meta;
   type Story = StoryObj<typeof Label>;

   export const Default: Story = {
     args: {
       children: 'Default Label',
     },
   };

   export const CustomClass: Story = {
     args: {
       children: 'Custom Class Label',
       className: 'text-red-500 font-bold',
     },
   };
   