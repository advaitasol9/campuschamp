import { file } from '../FileInput';
import React from 'react';
import classes from './_style.module.scss';
import { FiFileText } from 'react-icons/fi';
import colors from '../../assets/colors';
// import { useTranslation } from "react-i18next";
import { AiOutlineEye } from 'react-icons/ai';
import classNames from 'classnames';
import { Button } from 'appfactory.react.web';

export type Props = {
  label?: string;
  file: file;
  error?: string;
  size?: "small" | "large";
  className?: string;
};

const ViewFile = ({ label, file, size = 'large', className }: Props) => {
  // const { t } = useTranslation();

  const viewbtn = () => (
    <Button
      leftElement={
        <AiOutlineEye
          size={'17px'}
          color={colors.blue}
          style={{ marginRight: '5px' }}
        />
      }
      variant={'None'}
    >
      <p className={classes['view-btn-text']}>{'view'}</p>
    </Button>
  );

  return (
    <div className={classNames(classes['view-file'], className)}>
      {size == 'large' ? (
        <>
          {label && <p className={classes.label}>{label}</p>}
          <div className={classes['row']}>
            <div className={classes['file-name']}>
              <FiFileText color={colors.blue} size={'18px'} />
              <p>{file.name}</p>
            </div>
            {viewbtn()}
          </div>
        </>
      ) : (
        viewbtn()
      )}
    </div>
  );
};

export default ViewFile;
