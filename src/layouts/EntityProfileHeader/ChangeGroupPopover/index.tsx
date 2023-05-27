import React, { useState } from 'react';
import classes from './_style.module.scss';
import { Popover } from 'react-bootstrap';
import {
  Button,
  CheckInput,
  handlePrimaryInputChange,
  PrimaryInput,
} from 'appfactory.react.web';
import { FaSearch } from 'react-icons/fa';
import colors from '../../../assets/colors';
import { OverlayInjectedProps } from 'react-bootstrap/esm/Overlay';

const studentGroups = [
  {
    id: 'sports',
    title: 'Sports',
  },
  {
    id: '1',
    title: 'Some Group Name',
  },
  {
    id: '2',
    title: 'Some Group Name',
  },
  {
    id: '3',
    title: 'Some Group Name',
  },
  {
    id: '2',
    title: 'Some Group Name',
  },
  {
    id: '3',
    title: 'Some Group Name',
  },
];

const ChangeGroupPopover = React.forwardRef<
  HTMLDivElement,
  OverlayInjectedProps
>(({ popper, children, show: _, ...props }, ref) => {
  const [search, setSearch] = useState('');
  const [selectedGroups, setSelectedGroups] = useState<
    {
      id: string;
      title: string;
    }[]
  >([]);

  const handleCheckInputChange = (chk: { id: string; title: string }) => {
    let idx = selectedGroups.findIndex((grp) => grp.id == chk.id);
    if (idx == -1) {
      setSelectedGroups([...selectedGroups, chk]);
    } else {
      setSelectedGroups((state) => {
        let tempArr = [...state];
        tempArr.splice(idx, 1);
        return tempArr;
      });
    }
  };

  const isChecked = (chk: { id: string; title: string }) => {
    let idx = selectedGroups.findIndex((grp) => grp.id == chk.id);
    return idx == -1 ? false : true;
  };

  return (
    <Popover
      {...props}
      ref={ref}
      body
      className={classes['change-group-popover']}
    >
      <div className={classes['header']}>
        <p className={classes['text1']}>{'change_group'}</p>
        <Button variant="Link" className={classes['btn-without-padding']}>
          <p className={classes['text2']}>{'manage'}</p>
        </Button>
      </div>
      <div className={classes['body']}>
        <PrimaryInput
          value={search}
          onChange={(e) => handlePrimaryInputChange(e, setSearch)}
          leftIcon={() => <FaSearch color={colors['icon']} size={'12.3px'} />}
          placeholder={'search'}
          className={classes['search-bar']}
        />
        <div className={classes['group-list']}>
          {studentGroups.map((grp) => (
            <CheckInput
              type={'checkbox'}
              checked={isChecked(grp)}
              label={grp.title}
              onClick={() => handleCheckInputChange(grp)}
            />
          ))}
        </div>
      </div>
      <div className={classes['footer']}>
        <Button
          variant={'Outline'}
          className={classes['btn-outline']}
          onClick={props.hideOverlay}
        >
          <p>{'cancel'}</p>
        </Button>
        <Button className={classes['btn-default']} onClick={props.hideOverlay}>
          <p>{'apply'}</p>
        </Button>
      </div>
    </Popover>
  );
});

export default ChangeGroupPopover;
