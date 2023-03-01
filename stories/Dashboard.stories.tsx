import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DashboardProps, Dashboard } from '../src';
import { navbarData } from '../src/data/navbarData';
import classes from './header.module.scss';
import { Right } from './Header.stories';

const meta: Meta = {
  title: 'Dashboard',
  component: Dashboard,
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

const Template: Story<DashboardProps> = args => <Dashboard {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <div />,
  navbar: { ...navbarData },
  header: {
    right: <Right />,
    instLogo:
      'https://e7.pngegg.com/pngimages/759/202/png-clipart-education-school-logo-learning-teaching-angle-class.png',
    styles: {
      root: classes.header,
      leftContainer: classes.left,
      rightContainer: classes.right,
      logo: classes.logo,
      instLogo: classes.instLogo,
    },
  },
};
