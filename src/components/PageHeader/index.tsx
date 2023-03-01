import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import classes from './_style.module.scss';

export interface PageHeaderProps {
  hideIcon?: boolean;
  title: string;
  onClickIcon?: (a: any) => void;
}

const PageHeader = ({
  hideIcon,
  title,
  onClickIcon = () => {},
}: PageHeaderProps) => {
  return (
    <div className={classes['page-header']}>
      {!hideIcon && (
        <FaArrowLeft
          color={'#000000'}
          size={'18px'}
          onClick={onClickIcon}
          className={classes.icon}
        />
      )}
      <p>{title}</p>
    </div>
  );
};

export default PageHeader;
