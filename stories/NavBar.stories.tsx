import React from 'react';
import { Meta, Story } from '@storybook/react';
import { NavbarProps, Navbar } from '../src';
import { navbarData } from '../src/data/navbarData';

const meta: Meta = {
  title: 'NavBar',
  component: Navbar,
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

const Template: Story<NavbarProps> = args => <Navbar {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...navbarData,
};
