import classNames from 'classnames';
import React from 'react';
import classes from './_style.module.scss';

type detailsType = {
  title: string;
  value: string;
  id?: string;
};

export interface EntityStaticDetailsProps {
  details: detailsType[];
}

const EntityStaticDetails = ({ details }: EntityStaticDetailsProps) => {
  return (
    <div className={classes['entity-static-details']}>
      {details.map((details: detailsType, idx: number) => (
        <div
          className={classNames(classes['detail'], {
            [classes['detail-with-left-border']]: idx > 0 ? true : false,
          })}
        >
          <p className={classes['title']}>{details.title}</p>
          <p className={classes['value']}>{details.value}</p>
        </div>
      ))}
    </div>
  );
};

export default EntityStaticDetails;
