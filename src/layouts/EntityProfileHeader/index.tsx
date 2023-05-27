import React from 'react';
import { Button } from 'appfactory.react.web';
import colors from '../../assets/colors';
import TableStat from '../../components/TableStat';
import ChangeGroupPopover from './ChangeGroupPopover';
import { useRef, useState } from 'react';
import { Dropdown, OverlayTrigger } from 'react-bootstrap';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsDownload, BsTrash } from 'react-icons/bs';
import classes from './_style.module.scss';

type badge = {
  name: string;
  icon: string;
};

type sessionDetail = {
  title: string;
  value: string;
};

type session = {
  id: string;
  title: string;
  details: sessionDetail[];
};

type entityDetails = {
  id: string;
  name: string;
  img: string;
  badges: badge[];
};

export interface EntityProfileHeaderProps {
  entityDetails: entityDetails;
  sessions: session[];
  onPressDownload?: () => void;
  onPressEdit?: () => void;
  onPressDelete?: () => void;
}

const EntityProfileHeader = ({
  sessions,
  entityDetails: { id, name, img, badges },
  onPressDownload = () => {},
  onPressEdit = () => {},
  onPressDelete = () => {},
}: EntityProfileHeaderProps) => {
  const [session, setSession] = useState(sessions[0]);
  const [visibleBadgeName, setVisibleBadgeName] = useState('');

  const target = useRef(null);

  return (
    <div className={classes['entity-summary']}>
      <div className={classes.entity}>
        <div className={classes.image}>
          <img src={img} alt={'profile_photo'} />
        </div>
        <div className={classes.details}>
          <p className={classes.name}>{name}</p>
          <p className={classes.id}>ID: {id}</p>
          <div className={classes.badges} ref={target}>
            {badges.map((badge: badge) => (
              <OverlayTrigger
                placement="bottom-end"
                overlay={
                  <ChangeGroupPopover
                    hideOverlay={() => {
                      setVisibleBadgeName('');
                    }}
                  />
                }
                trigger={'click'}
                show={visibleBadgeName == badge.name}
              >
                <Button
                  variant="Outline"
                  leftElement={
                    <img
                      src={badge.icon}
                      style={{ height: '16px', width: '16px' }}
                    />
                  }
                  rightElement={
                    <AiOutlineEdit color={colors.white} size={'16px'} />
                  }
                  className={classes.badge}
                  onClick={() => setVisibleBadgeName(badge.name)}
                >
                  <p>{badge.name}</p>
                </Button>
              </OverlayTrigger>
            ))}
          </div>
        </div>
      </div>

      <div className={classes.session}>
        <Dropdown className={classes.ddn}>
          <Dropdown.Toggle as={'div'} className={classes['ddn-toggle']}>
            <p className={classes.id}>{session.title}</p>
          </Dropdown.Toggle>
          <Dropdown.Menu className={classes['ddn-menu']}>
            {sessions.map((i: session) => (
              <Dropdown.Item
                className={classes['ddn-menu-item']}
                onClick={() => {
                  setSession(i);
                }}
              >
                <p>{i.title}</p>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <div className={classes['session-details']}>
          {session.details.map((detail: sessionDetail) => (
            <TableStat
              title={detail.value}
              //@ts-ignore
              count={detail.title}
              className={classes['entity-details']}
            />
          ))}
        </div>
        <div className={classes['actions']}>
          <Button
            variant="None"
            onClick={onPressDownload}
            leftElement={<BsDownload size={'15px'} color={colors.blue} />}
            className={classes['download']}
          >
            <p>Download</p>
          </Button>
          <Button variant="None" className={classes['download']}>
            <AiOutlineEdit
              color={colors.blue}
              size={'16px'}
              onClick={onPressEdit}
            />
          </Button>
          <Button variant="None" className={classes['download']}>
            <BsTrash
              color={colors.error}
              size={'16px'}
              onClick={onPressDelete}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EntityProfileHeader;
