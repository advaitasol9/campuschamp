import React from 'react';
import classes from './_style.module.scss';
import classNames from 'classnames';

export interface TableStatProps {
  title: string;
  count: number;
  img?: string;
  className?: string;
}

const TableStat = ({ img, count, title, className }: TableStatProps) => {
  return (
    <div className={classNames(classes['table-stat'], className)}>
      <div className={classes.fg}>
        {img && (
          <div className={classes['left']}>
            <img src={img} alt={title} />
          </div>
        )}
        <div className={classes['right']}>
          <p className={classes.count}>{count}</p>
          <p className={classes.title}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TableStat;
