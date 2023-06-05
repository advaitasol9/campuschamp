import { Meta, Story } from '@storybook/react';
import React from 'react';
import { EntityFormActions, EntityFormActionsProps } from '../src';

const meta: Meta = {
  title: 'EntityFormActions',
  component: EntityFormActions,
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

const Template: Story<EntityFormActionsProps> = (args) => (
  <EntityFormActions {...args} />
);

export const Default = Template.bind({});

Default.args = {};
