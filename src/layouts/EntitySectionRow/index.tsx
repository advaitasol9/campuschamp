import classNames from 'classnames';
import React from 'react';
import { ParentFC } from '../../types';
import classes from './_style.module.scss';

export interface EntitySectionRowProps {
  title?: string | JSX.Element;
  noMarginTop?: boolean;
}

const EntitySectionRow: ParentFC<EntitySectionRowProps> = ({
  title,
  children,
  noMarginTop = false,
}) => {
  return (
    <div
      className={classNames(classes['entity-section-row-container'], {
        [classes['row-without-margin-top']]: noMarginTop,
      })}
    >
      {title && (
        <div className={classes['title-wrapper']}>
          {typeof title == 'string' ? (
            <p className={classes.title}>{title}</p>
          ) : (
            title
          )}
        </div>
      )}

      <div className={classes['entity-section-row']}>{children}</div>
    </div>
  );
};

export default EntitySectionRow;
