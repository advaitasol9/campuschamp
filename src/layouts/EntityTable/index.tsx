import classNames from 'classnames';
import React from 'react';
import { ParentFC } from '../../types';
import classes from './_style.module.scss';

export interface EntityTableProps {
  columns: { id: string; title: string }[];
}

const EntityTable: ParentFC<EntityTableProps> = ({ columns, children }) => {
  return (
    <table className={classes['entity-table']}>
      <tr className={classes.header}>
        {columns.map((column, idx) => (
          <th
            key={column.id}
            className={classNames({
              [classes['start-cell']]: idx == 0,
              [classes['end-cell']]: idx == columns.length - 1,
            })}
          >
            {column.title}
          </th>
        ))}
      </tr>
      {children}
    </table>
  );
};

export default EntityTable;
