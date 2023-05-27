import { Meta, Story } from '@storybook/react';
import React from 'react';
import { EntityDynamicSection, EntityDynamicSectionProps } from '../src';

const meta: Meta = {
  title: 'EntityDynamicSection',
  component: EntityDynamicSection,
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

const Template: Story<EntityDynamicSectionProps> = (args) => (
  <EntityDynamicSection {...args} />
);

export const Default = Template.bind({});

Default.args = {
  data: {
    first_name: 'Prasad',
    middle_name: 'Kumar',
    last_name: 'Sharma',
    date_of_birth: '10 May 1994',
    occupation: 'Businessman',
    income_per_year_in_lpa: '12',
    highest_education: 'Graduation',
    phone_number: '99812627712',
    email: 'prasad@gmail.com',
    address: 'Hn7, word6, nai bazar Bhadohi, Uttar Pradesh 22409',
    aadhar_number: '0000 0000 0000 0000',
    "father's_photo": 'https://fahters.png',
  },
  title: "father's_details",
};
