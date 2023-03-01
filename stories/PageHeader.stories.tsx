import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PageHeaderProps, PageHeader } from '../src';

const meta: Meta = {
  title: 'PageHeader',
  component: PageHeader,
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

const Template: Story<PageHeaderProps> = args => <PageHeader {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Random',
};
