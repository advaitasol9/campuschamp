import React from 'react';
import { Meta, Story } from '@storybook/react';
import { HeaderProps, Header } from '../src';
import { BsChatLeftDots } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';
import { HiOutlineBell } from 'react-icons/hi';
import { MdOutlineLiveHelp } from 'react-icons/md';
import { Button, Dropdown } from 'react-bootstrap';
import { Avatar } from 'appfactory.react.web';
import classes from './header.module.scss';
import colors from '../src/assets/colors';

const meta: Meta = {
  title: 'Header',
  component: Header,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<HeaderProps> = args => <Header {...args} />;

export const Right = () => {
  return (
    <div className={classes['right-component']}>
      <BsChatLeftDots color={colors.icon} size={'16px'} />
      <AiOutlineCalendar color={colors.icon} size={'20px'} />
      <HiOutlineBell color={colors.icon} size={'20px'} />
      <Button className={classes['help-button']}>
        <MdOutlineLiveHelp color={colors.icon} size={'20px'} />
        <p>CC Help</p>
      </Button>
      <Dropdown>
        <Dropdown.Toggle as={'div'} className={classes['ddn-toggle']}>
          <Avatar label={'Ravikanth Veera'} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  right: <Right />,
  instLogo:
    'https://e7.pngegg.com/pngimages/759/202/png-clipart-education-school-logo-learning-teaching-angle-class.png',
  styles: {
    root: classes.header,
    leftContainer: classes.left,
    rightContainer: classes.right,
    logo: classes.logo,
    instLogo: classes.instLogo,
  },
  search: {
    placeholder: 'Enter here',
  },
};
