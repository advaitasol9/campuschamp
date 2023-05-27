import { Meta, Story } from '@storybook/react';
import { PrimaryInput } from 'appfactory.react.web';
import React from 'react';
import { EntitySectionRow, EntitySectionRowProps } from '../src';

const meta: Meta = {
  title: 'EntitySectionRow',
  component: EntitySectionRow,
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

const Template: Story<EntitySectionRowProps> = (args) => (
  <EntitySectionRow {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: 'Children Info',
  children: (
    <>
      <PrimaryInput label={'h_street_building'} placeholder={'enter address'} />
      <PrimaryInput label={'city'} placeholder={'enter city'} />
    </>
  ),
  noMarginTop: false,
};
