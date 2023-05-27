import { Meta, Story } from '@storybook/react';
import React from 'react';
import { EntityProfileHeader, EntityProfileHeaderProps } from '../src';
import logo from '../src/assets/img/logo.png';

const meta: Meta = {
  title: 'EntityProfileHeader',
  component: EntityProfileHeader,
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

const Template: Story<EntityProfileHeaderProps> = (args) => (
  <EntityProfileHeader {...args} />
);

export const Default = Template.bind({});

Default.args = {
  entityDetails: {
    name: 'Abhishek Sharma',
    id: '1023',
    img: logo,
    badges: [
      {
        name: 'Disabled',
        icon: logo,
      },
      {
        name: 'Sports',
        icon: logo,
      },
    ],
  },
  sessions: [
    {
      id: '0',
      title: 'Class X - Winter Session',
      details: [
        { title: 'Present Days', value: '235' },
        { title: 'Till Date', value: 'No Dues' },
        { title: 'Books Issued', value: '3' },
      ],
    },
    {
      id: '1',
      title: 'Class X - Fall Session',
      details: [
        { title: 'Present Days', value: '213' },
        { title: 'Till Date', value: 'No Dues' },
        { title: 'Books Issued', value: '0' },
      ],
    },
  ],
};
