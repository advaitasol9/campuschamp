import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  EntitySectionNumericTitle,
  EntitySectionNumericTitleProps,
} from '../src';

const meta: Meta = {
  title: 'EntitySectionNumericTitle',
  component: EntitySectionNumericTitle,
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

const Template: Story<EntitySectionNumericTitleProps> = (args) => (
  <EntitySectionNumericTitle {...args} />
);

export const Default = Template.bind({});

Default.args = {
  index: 2,
  title: 'Children',
  showDelete: true,
  onClickDelete: () => {},
};
