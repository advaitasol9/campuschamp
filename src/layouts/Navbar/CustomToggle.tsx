import React, { ReactElement } from 'react';
import classes from './_style.module.scss';

const CustomToggle = React.forwardRef(
  (
    {
      children,
      onClick,
    }: {
      children: ReactElement;
      onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    },
    ref: any
  ) => {
    return (
      <a
        href={''}
        ref={ref}
        onClick={e => {
          e.preventDefault();
          onClick(e);
        }}
        className={classes['custom-toggle']}
      >
        {children}
      </a>
    );
  }
);

export default CustomToggle;
