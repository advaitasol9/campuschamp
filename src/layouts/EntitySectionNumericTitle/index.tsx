import React from 'react';
import classes from './_style.module.scss';
import { RiDeleteBin6Line } from 'react-icons/ri';
import colors from '../../assets/colors';

export interface EntitySectionNumericTitleProps {
  index: number;
  title: string;
  showDelete?: boolean;
  onClickDelete?: () => void;
}

const EntitySectionNumericTitle = ({
  index,
  title,
  showDelete = false,
  onClickDelete,
}: EntitySectionNumericTitleProps) => {
  return (
    <div className={classes['entity-section-numeric-title']}>
      <div className={classes['index-wrapper']}>
        <p className={classes['index']}>{index}</p>
      </div>
      <p className={classes['title']}>{title}</p>
      {showDelete && (
        <RiDeleteBin6Line color={colors.error} onClick={onClickDelete} />
      )}
    </div>
  );
};

export default EntitySectionNumericTitle;
