import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DashboardProps,
  Dashboard,
  EntityWrapper,
  EntitySection,
  EntitySectionRow,
  EntityFormActions,
} from '../src';
import { navbarData } from '../src/data/navbarData';
import classes from './header.module.scss';
import { Right } from './Header.stories';
import { PrimaryInput } from 'appfactory.react.web';

const meta: Meta = {
  title: 'Dashboard',
  component: Dashboard,
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

const Template: Story<DashboardProps> = (args) => <Dashboard {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <EntityWrapper
      tabs={[
        { title: 'student_details' },
        { title: 'family_details' },
        { title: 'fees_details' },
        { title: 'transportation' },
        { title: 'hostel' },
        { title: 'upload_documents' },
        { title: 'others' },
      ]}
      selectedTab="student_details"
      onClickTab={() => {}}
    >
      <>
        <EntitySection
          title="Enter Student Details"
          noPaddingTop
          hideBottomBorder
        >
          <EntitySectionRow noMarginTop>
            <PrimaryInput
              label={'h_street_building'}
              placeholder={'enter address'}
            />
            <PrimaryInput label={'city'} placeholder={'enter city'} />
          </EntitySectionRow>
          <EntitySectionRow>
            <PrimaryInput label={'taluk'} placeholder={'enter taluk'} />
            <PrimaryInput label={'pincode'} placeholder={'enter pincode'} />
          </EntitySectionRow>
        </EntitySection>
        <EntityFormActions />
      </>
    </EntityWrapper>
  ),
  navbar: { ...navbarData },
  header: {
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
  },
};
