import React from 'react';
import classes from './_style.module.scss';
import { Button } from 'appfactory.react.web';
import classnames from 'classnames';
import colors from '../../assets/colors';
import { ParentFC } from '../../types';

type tabType = {
  title: string;
};

export interface EntityWrapperProps {
  tabs: tabType[];
  onClickTab: (val: any) => void;
  selectedTab: string;
  hideFooter?: boolean;
  onClickDiscard?: (v: any) => void;
  onClickSave?: (v: any) => void;
  onClickContinue?: (v: any) => void;
}

const EntityDetails: ParentFC<EntityWrapperProps> = ({
  children,
  tabs,
  onClickTab,
  selectedTab,
  hideFooter = false,
  onClickDiscard,
  onClickContinue,
  onClickSave,
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
      {!hideFooter && (
        <div className={classes.footer}>
          <Button
            variant="Outline"
            color={colors['dark-text']}
            onClick={onClickDiscard}
            className={classnames(classes['btn'], classes['btn-outline'])}
          >
            <p>Discard</p>
          </Button>
          <div className={classes['right-row']}>
            <Button
              variant="Outline"
              color={colors['dark-text']}
              onClick={onClickSave}
              className={classnames(classes['btn'], classes['btn-outline'])}
            >
              <p>Save</p>
            </Button>
            <Button className={classes['btn']} onClick={onClickContinue}>
              <p>Continue</p>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EntityDetails;
