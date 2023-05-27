import { Meta, Story } from '@storybook/react';
import { PrimaryInput } from 'appfactory.react.web';
import React from 'react';
import {
  EntityWrapper,
  EntityWrapperProps,
  EntitySection,
  EntitySectionRow,
} from '../src';

const meta: Meta = {
  title: 'EntityWrapper',
  component: EntityWrapper,
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

const Template: Story<EntityWrapperProps> = (args) => (
  <EntityWrapper {...args} />
);

export const Default = Template.bind({});

Default.args = {
  tabs: [
    { title: 'student_details' },
    { title: 'family_details' },
    { title: 'fees_details' },
    { title: 'transportation' },
    { title: 'hostel' },
    { title: 'upload_documents' },
    { title: 'others' },
  ],
  onClick: () => {},
  selectedTab: 'student_details',
  children: (
    <EntitySection title="Enter Student Details" noPaddingTop>
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
    </EntitySection>
  ),
};
