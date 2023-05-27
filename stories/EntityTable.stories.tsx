import { Meta, Story } from '@storybook/react';
import React from 'react';
import { EntityTable, EntityTableProps } from '../src';

const meta: Meta = {
  title: 'EntityTable',
  component: EntityTable,
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

const Template: Story<EntityTableProps> = (args) => <EntityTable {...args} />;

export const Default = Template.bind({});

Default.args = {
  columns: [
    { id: 'topic', title: 'Topic' },
    { id: 'name', title: 'name_of_the_journal' },
    { id: 'edition', title: 'edition' },
    { id: 'isbn', title: 'isbn_no' },
  ],
  children: [
    {
      topic: 'Lorem Ipsum dorol',
      journal: 'Consectetur adipiscing elit',
      edition: '10 May 2022',
      isbn: '9781234567897',
      link: 'https://scripts.dofollowgreenline.com/pC9KDz',
    },
    {
      topic: 'Lorem Ipsum dorol',
      journal: 'Consectetur adipiscing elit',
      edition: '10 May 2022',
      isbn: '9781234567897',
      link: 'https://scripts.dofollowgreenline.com/pC9KDz',
    },
    {
      topic: 'Lorem Ipsum dorol',
      journal: 'Consectetur adipiscing elit',
      edition: '10 May 2022',
      isbn: '9781234567897',
      link: 'https://scripts.dofollowgreenline.com/pC9KDz',
    },
  ].map((res) => (
    <tr>
      <td>{res.topic}</td>
      <td>{res.journal}</td>
      <td>{res.edition}</td>
      <td>{res.isbn}</td>
    </tr>
  )),
};
