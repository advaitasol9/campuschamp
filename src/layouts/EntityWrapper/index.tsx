import React from 'react';
import classes from './_style.module.scss';
import { Button } from 'appfactory.react.web';
import classnames from 'classnames';
import { ParentFC } from '../../types';

type tabType = {
  title: string;
};

export interface EntityWrapperProps {
  tabs: tabType[];
  onClickTab: (val: any) => void;
  selectedTab: string;
}

const EntityDetails: ParentFC<EntityWrapperProps> = ({
  children,
  tabs,
  onClickTab,
  selectedTab,
}) => {
  return (
    <div className={classes['add-entity']}>
      <div className={classes.tabs}>
        {tabs.map((item: tabType) => {
          const isTabSelected = selectedTab === item.title;
          return (
            <Button
              className={classes['btn']}
              variant={isTabSelected ? 'Default' : 'None'}
              onClick={() => onClickTab(item.title)}
            >
              <p
                className={classnames({
                  [classes.selectedText]: isTabSelected,
                })}
              >
                {item.title}
              </p>
            </Button>
          );
        })}
      </div>
      {children}
    </div>
  );
};

export default EntityDetails;
