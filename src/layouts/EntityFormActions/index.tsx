import { Button } from 'appfactory.react.web';
import React from 'react';
import colors from '../../assets/colors';
import classes from './_style.module.scss';
import classnames from 'classnames';

export type EntityFormActionsProps = {
  onClickDiscard?: (v: any) => void;
  onClickSave?: (v: any) => void;
  onClickContinue?: (v: any) => void;
};

const EntityFormActions = ({
  onClickDiscard,
  onClickContinue,
  onClickSave,
}: EntityFormActionsProps) => {
  return (
    <div className={classes['entity-form-actions']}>
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
  );
};

export default EntityFormActions;
