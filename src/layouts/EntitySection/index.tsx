import React from 'react';
import classes from './_style.module.scss';
import classnames from 'classnames';
import { ParentFC } from '../../types';

export interface EntitySectionProps {
  title?: string;
  subTitle?: string;
  hideBottomBorder?: boolean;
  noPaddingBottom?: boolean;
  noPaddingTop?: boolean;
}

const EntitySection: ParentFC<EntitySectionProps> = ({
  title,
  subTitle,
  children,
  hideBottomBorder = false,
  noPaddingBottom = false,
  noPaddingTop = false,
}) => {
  return (
    <div
      className={classnames(classes['entity-section'], {
        [classes['entity-section-without-border']]: hideBottomBorder,
        [classes['entity-section-without-bottom-padding']]: noPaddingBottom,
        [classes['entity-section-without-top-padding']]: noPaddingTop,
      })}
    >
      {title && (
        <p className={classes['title']}>
          {title}{' '}
          {subTitle && <span className={classes['sub-title']}>{subTitle}</span>}
        </p>
      )}
      {children}
    </div>
  );
};

export default EntitySection;
