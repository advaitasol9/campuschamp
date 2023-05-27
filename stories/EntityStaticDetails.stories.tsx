import { Meta, Story } from '@storybook/react';
import React from 'react';
import { EntityStaticDetails, EntityStaticDetailsProps } from '../src';

const meta: Meta = {
  title: 'EntityStaticDetails',
  component: EntityStaticDetails,
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

const Template: Story<EntityStaticDetailsProps> = (args) => (
  <EntityStaticDetails {...args} />
);

export const Default = Template.bind({});

Default.args = {
  details: [
    {
      title: 'Scholar No.',
      value: '1234556',
    },
    {
      title: 'School Center',
      value: 'Bal Vihar Niketan',
    },
    {
      title: 'School Address',
      value: 'Negro Arroyo Lane, Albuqueuqe, New Mexico',
    },
    {
      title: 'Academic year',
      value: '2022-2023',
    },
    {
      title: 'Student Added Date',
      value: '12-08-2022',
    },
    {
      title: 'Student Added Time',
      value: '12:55 P.M.',
    },
  ],
};
