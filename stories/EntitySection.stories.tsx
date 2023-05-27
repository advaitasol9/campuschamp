import { Meta, Story } from '@storybook/react';
import { PrimaryInput } from 'appfactory.react.web';
import React from 'react';
import { EntitySection, EntitySectionProps, EntitySectionRow } from '../src';

const meta: Meta = {
  title: 'EntitySection',
  component: EntitySection,
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

const Template: Story<EntitySectionProps> = (args) => (
  <EntitySection {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: 'Parent Details',
  subTitle: 'Info',
  children: (
    <>
      <EntitySectionRow noMarginTop>
        <PrimaryInput
          label={'h_street_building'}
          placeholder={'enter address'}
        />
        <PrimaryInput label={'city'} placeholder={'enter city'} />
      </EntitySectionRow>
      <EntitySectionRow>
        <PrimaryInput label={'taluk'} placeholder={'enter taluk'} />
        <PrimaryInput label={'pincode'} placeholder={'enter pincode'} />
      </EntitySectionRow>
    </>
  ),
};
