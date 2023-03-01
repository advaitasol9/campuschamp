import React from 'react';
// import Footer from '../Footer';
import Header, { HeaderProps } from '../Header';
import NavBar, { NavbarProps } from '../Navbar';
import classes from './_style.module.scss';

export interface DashboardProps {
  children: React.ReactNode;
  header: HeaderProps;
  navbar: NavbarProps;
  title?: string;
  path?: string;
}

const Dashboard = ({ children, header, navbar }: DashboardProps) => {
  return (
    <div className={classes.dashboard}>
      <div className={classes.head}>
        <Header {...header} />
        <NavBar {...navbar} />
      </div>

      <div className={classes.children}>
        {/* <div className={classes.head}>
          <p className={classes.title}>{title}</p>
          <p className={classes.path}>{path}</p>
        </div> */}
        {children}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

Dashboard.defaultProps = {};

export default Dashboard;
