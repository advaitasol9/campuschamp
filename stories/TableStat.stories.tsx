import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TableStatProps, TableStat } from '../src';

const meta: Meta = {
  title: 'TableStat',
  component: TableStat,
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

const Template: Story<TableStatProps> = args => <TableStat {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Random',
  count: 20,
  // img:
  //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG8Ogg1R2WkRRVnsxMlr_WqdNwhVzo9vvW_42SZm8&s',
};
