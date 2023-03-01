import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TableFiltersProps, TableFilters } from '../src';

const meta: Meta = {
  title: 'Table Filter',
  component: TableFilters,
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

const Template: Story<TableFiltersProps> = args => <TableFilters {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  title: 'Categories',
  data: [
    {
      id: '0',
      item: 'All Degrees',
      count: 20,
      selected: true,
    },
    {
      id: '1',
      item: 'UG',
      count: 20,
      selected: true,
    },
    {
      id: '2',
      item: 'PG',
      count: 20,
      selected: false,
    },
    {
      id: '3',
      item: 'Certification',
      count: 20,
      selected: true,
    },
    {
      id: '4',
      item: 'Diploma',
      count: 20,
      selected: false,
    },
    {
      id: '5',
      item: 'PG',
      count: 20,
      selected: false,
    },
    {
      id: '6',
      item: 'Certification',
      count: 20,
      selected: true,
    },
    {
      id: '7',
      item: 'Diploma',
      count: 20,
      selected: false,
    },
  ],
};
