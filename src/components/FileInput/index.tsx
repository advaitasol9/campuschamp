import React from 'react';
import { MdOutlineUploadFile } from 'react-icons/md';
import classes from './_style.module.scss';
import classNames from 'classnames';
import colors from '../../assets/colors';
// import { useTranslation } from "react-i18next";
import { AiOutlineEye } from 'react-icons/ai';

export type file = { path: string; name: string };

export type FileInputProps = {
  label?: string;
  value?: file[];
  error?: string;
  onFileSelect?: (val: file[]) => void;
  size?: 'small' | 'large';
  info?: string | JSX.Element;
};

const FileInput = ({
  label,
  value,
  error,
  onFileSelect,
  size = 'large',
  info,
}: FileInputProps) => {
  // const { t } = useTranslation();

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onFileSelect && e.target.files) {
      console.log('files', e.target.files);
      onFileSelect(
        Object.values(e.target.files).map((file) => {
          return { path: URL.createObjectURL(file), name: file.name };
        })
      );
    }
  };

  return (
    <div className={classes['file-input']}>
      {label && (
        <p
          className={classNames(classes['label'], {
            [classes['label-large']]: size == 'large',
          })}
        >
          {label}
        </p>
      )}
      <div
        className={classNames(classes['wrapper'], {
          [classes['wrapper-large']]: size == 'large',
        })}
      >
        <label
          className={classNames(classes['input'], {
            [classes['input-large']]: size == 'large',
          })}
        >
          <input type="file" multiple onChange={handleFileInputChange} />
          {size == 'small' && value && value.length > 0 ? (
            <>
              <AiOutlineEye
                size={'16px'}
                color={colors.blue}
                style={{ marginTop: '-4px' }}
              />
              {'view'}
            </>
          ) : (
            <>
              <MdOutlineUploadFile
                size={'16px'}
                color={colors.blue}
                style={{ marginTop: '-4px' }}
              />
              {'upload'}
            </>
          )}
        </label>
        {size == 'large' && (
          <div className={classes.file}>
            {value && value.length > 0 ? (
              <p className={classes['file-name']}>
                {value.length > 1
                  ? `${value[0].name} & ${value.length - 1} more`
                  : value[0].name}
              </p>
            ) : (
              <p className={classes['placeholder']}>{'choose_file'}</p>
            )}
          </div>
        )}
      </div>
      {(info || error) && error ? (
        <p className={classes['error']}>{error}</p>
      ) : typeof info == 'string' ? (
        <p className={classes['info']}>{info}</p>
      ) : (
        info
      )}
    </div>
  );
};

export default FileInput;
