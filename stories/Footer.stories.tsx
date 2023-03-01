import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Footer, FooterProps } from '../src';

const meta: Meta = {
  title: 'Footer',
  component: Footer,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<FooterProps> = args => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {};
