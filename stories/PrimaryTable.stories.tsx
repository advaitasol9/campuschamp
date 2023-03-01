import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PrimaryTableProps, PrimaryTable } from '../src';
import { CheckInput } from 'appfactory.react.web';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { fetchData } from '../src/data/fetchData';

type department = {
  id: string;
  department: string;
  currentHead: string;
  numCourses: number;
  alias: string;
  degrees: string;
  students: string;
  professor: string;
};

const meta: Meta = {
  title: 'PrimaryTable',
  component: PrimaryTable,
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

const Template: Story<PrimaryTableProps> = args => <PrimaryTable {...args} />;

export const Default = Template.bind({});

const columnHelper = createColumnHelper<department>();

const columns: ColumnDef<department, any>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <CheckInput
        type={'checkbox'}
        checked={table.getIsAllRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
        //   className={classes["select-input"]}
      />
    ),
    cell: ({ row }) => (
      <div>
        <CheckInput
          type="checkbox"
          checked={row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
          // className={classes["select-input"]}
        />
      </div>
    ),
  },
  columnHelper.accessor('id', {
    header: () => <span>ID</span>,
    cell: info => info.getValue(),
    footer: props => props.column.id,
  }),
  columnHelper.accessor('department', {
    header: () => <span>Department</span>,
    cell: info => info.getValue(),
    footer: props => props.column.id,
  }),
  columnHelper.accessor('currentHead', {
    header: () => <span>Current Head</span>,
    cell: info => info.getValue(),
    footer: props => props.column.id,
  }),
  columnHelper.accessor('numCourses', {
    header: () => <span>No. of Courses</span>,
    cell: info => info.getValue(),
    footer: props => props.column.id,
  }),
  columnHelper.accessor('alias', {
    header: () => <span>Alias</span>,
    cell: info => info.getValue(),
    footer: props => props.column.id,
  }),
  columnHelper.accessor('degrees', {
    header: () => <span>Degrees</span>,
    cell: info => info.getValue(),
    footer: props => props.column.id,
    enableSorting: false,
  }),
  columnHelper.accessor('students', {
    header: () => <span>Students</span>,
    cell: info => info.getValue(),
    footer: props => props.column.id,
  }),
  columnHelper.accessor('professor', {
    header: () => <span>Professor</span>,
    cell: info => info.getValue(),
    footer: props => props.column.id,
  }),
];

const getDataHandler = (paginationState, toSortColumnId) =>
  fetchData(paginationState, toSortColumnId);

Default.args = {
  columns: columns,
  getDataHandler,
};
