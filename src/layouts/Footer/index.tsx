import React from 'react';
import classes from './_style.module.scss';

export interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className={classes.footer}>
      <div>
        <p>V 1.00 6/16/22 @ 6:11PM ET © 2022 Champus Champ</p>
      </div>
    </footer>
  );
};

export default Footer;
