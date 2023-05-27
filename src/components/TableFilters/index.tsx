import { CheckInput } from 'appfactory.react.web';
import React, { useState } from 'react';
import { FaAngleDown, FaPlus } from 'react-icons/fa';

import colors from '../../assets/colors';
import classes from './_style.module.scss';

export interface TableFiltersProps {
  id: string;
  title: string;
  data: TableFilterProps[];
  addFilterHandler?: () => void;
  onChange?: ({
    id,
    title,
    data,
  }: {
    id: string;
    title: string;
    data: TableFilterProps[];
  }) => void;
}

export interface TableFilterProps {
  id: string;
  item: string;
  count: number;
  selected: boolean;
}

const TableFilters = ({
  id,
  title,
  data,
  addFilterHandler,
  onChange = () => {},
}: TableFiltersProps) => {
  const handleChange = (
    arg: React.FormEvent<HTMLInputElement>,
    idx: number
  ) => {
    let tempArr = [...data];
    tempArr[idx].selected = (arg.target as HTMLInputElement).checked;
    onChange({ id, title, data: tempArr });
  };

  const [page, setPage] = useState<number>(0);

  return (
    <div className={classes.filters} key={id}>
      <div className={classes.head}>
        <p>{title}</p>
        <div onClick={addFilterHandler}>
          <FaPlus color={colors.blue} size={'12px'} />
        </div>
      </div>
      <div className={classes.body}>
        {data
          .slice(0, (page + 1) * 5)
          .map((item: TableFilterProps, idx: number) => (
            <div className={classes.filterRow} key={item.id}>
              <CheckInput
                type="checkbox"
                checked={item.selected}
                onChange={(event) => handleChange(event, idx)}
                label={item.item}
                className={classes['select-input']}
              />
              <p>{item.count}</p>
            </div>
          ))}
      </div>
      {data.length > (page + 1) * 5 && (
        <div
          className={classes['view-more']}
          onClick={() => setPage((page) => page + 1)}
        >
          <p>View More</p>
          <FaAngleDown color={colors.blue} size={'14px'} />
        </div>
      )}
    </div>
  );
};

export default TableFilters;
