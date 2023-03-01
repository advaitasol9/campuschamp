import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { NavbarItemProps } from '.';
import colors from '../../assets/colors';
import classes from './_style.module.scss';
import classnames from 'classnames';
import { IoChevronDown } from 'react-icons/io5';
import CustomToggle from './CustomToggle';

interface Props extends NavbarItemProps {
  location: string;
}

const NavbarItem = ({
  id,
  title,
  img,
  to,
  disabled = false,
  imgSelected,
  menu = [],
  direction = 'down',
  location,
  className,
  isChild = false,
}: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  const selected = location.includes(to || 'a rand0m st3ing');

  return (
    <Dropdown
      onMouseEnter={() => {
        setShowMenu(true);
      }}
      onMouseLeave={() => {
        setShowMenu(false);
      }}
      drop={direction}
      className={classnames(className)}
    >
      <Dropdown.Toggle
        key={id}
        as={CustomToggle}
        onClick={() => {
          if (to) {
            window.location.href = to;
          }
          setShowMenu(false);
        }}
      >
        <div
          className={classnames({
            [classes.navItem]: true,
            [classes.childItem]: isChild,
            [classes.navItemSelected]: selected,
          })}
        >
          {img && <img src={selected ? imgSelected : img} alt={title} />}
          <p>{title}</p>
          {!isChild && !disabled && (
            <IoChevronDown
              color={selected ? colors.white : colors['dark-text']}
              size={'12px'}
              style={{ marginLeft: '2px' }}
            />
          )}
        </div>
      </Dropdown.Toggle>
      {!disabled && showMenu && (
        <Dropdown.Menu show={showMenu}>
          {menu.map(
            ({ menu: Menu = [], ...item }: NavbarItemProps, index: number) => {
              if (Menu.length > 0) {
                return (
                  <NavbarItem
                    {...item}
                    menu={Menu}
                    location={location}
                    direction={index == menu.length - 1 ? 'start' : 'end'}
                    className={classes.childNavItem}
                    isChild={true}
                  />
                );
              } else {
                const selected = location.includes(item.to || 'ahjsdjahsdk');

                return (
                  <Dropdown.Item
                    href={item.to}
                    key={item.id}
                    className={classes['childItem']}
                  >
                    <p
                      style={{
                        color: selected ? colors.blue : colors['dark-text'],
                      }}
                    >
                      {item.title}
                    </p>
                  </Dropdown.Item>
                );
              }
            }
          )}
        </Dropdown.Menu>
      )}
    </Dropdown>
  );
};

NavbarItem.defaultProps = {
  disabled: false,
  menu: [],
};

export default NavbarItem;
