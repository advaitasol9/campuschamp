import React from 'react';
import NavbarItem from './NavbarItem';
import classes from './_style.module.scss';

export interface SelectedNavItemProps {
  [key: number]: string;
}

export interface NavbarItemProps {
  id: string;
  title: string;
  disabled?: boolean;
  img?: string;
  imgSelected?: string;
  to?: string;
  direction?: 'up' | 'up-centered' | 'down' | 'down-centered' | 'start' | 'end';
  menu?: NavbarItemProps[];
  className?: string;
  isChild?: boolean;
}

export interface NavbarProps {
  navBarItems: NavbarItemProps[];
  location: string;
}

const NavBar = ({ navBarItems, location }: NavbarProps) => {
  return (
    <div className={classes.navBar}>
      {navBarItems.map((item: NavbarItemProps) => (
        <NavbarItem {...item} location={location} key={item.id} />
      ))}
    </div>
  );
};

NavBar.defaultProps = {
  navBarItems: [],
};

export default NavBar;
