import React, { ReactElement } from 'react';
import { FaSearch } from 'react-icons/fa';
import colors from '../../assets/colors';
import { PrimaryInput, PrimaryInputProps } from 'appfactory.react.web';
import classes from './_style.module.scss';
import classnames from 'classnames';

export interface HeaderProps {
  logo?: string;
  instLogo?: string;
  search?: PrimaryInputProps;
  right?: ReactElement;
  styles?: {
    root?: string;
    leftContainer?: string;
    rightContainer?: string;
    logo?: string;
    instLogo?: string;
    search?: string;
  };
}

const Header = ({ logo, instLogo, search, right, styles }: HeaderProps) => {
  return (
    <div className={classnames(classes.header, styles?.root)}>
      <div className={classnames(classes.leftRow, styles?.leftContainer)}>
        {logo && (
          <img
            src={logo}
            className={classnames(classes.logo, styles?.logo)}
            alt={'Logo'}
          />
        )}
        {instLogo && (
          <img
            src={instLogo}
            className={classnames(classes.instLogo, styles?.instLogo)}
            alt={'Institution logo'}
          />
        )}
        {search && (
          <PrimaryInput
            leftIcon={() => <FaSearch color={colors['icon']} size={'12.3px'} />}
            className={classnames(classes['input-with-icon'], styles?.search)}
            {...search}
          />
        )}
      </div>
      <div className={classnames(classes.rightRow, styles?.rightContainer)}>
        {right && right}
      </div>
    </div>
  );
};

Header.defaultProps = {
  logo:
    'https://e7.pngegg.com/pngimages/759/202/png-clipart-education-school-logo-learning-teaching-angle-class.png',
  search: {
    placeholder: 'Enter here',
  },
};

export default Header;
