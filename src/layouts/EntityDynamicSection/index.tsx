import classNames from 'classnames';
import ViewFile from '../../components/ViewFile';
import React from 'react';
import classes from './_style.module.scss';

type attribute = {
  index: number;
  numOfColsRequired?: number;
  type?: 'default' | 'file' | 'fileSmall';
  hideLabel?: boolean;
};

type struct = {
  numCol: number;
  attributes?: attribute[];
};

export interface EntityDynamicSectionProps {
  data: { [val: string]: any };
  title?: string | JSX.Element;
  struct?: struct[];
  type?: 'default' | 'file' | 'fileSmall';
}

const EntityDynamicSection = ({
  data,
  title,
  struct,
  type = 'default',
}: EntityDynamicSectionProps) => {
  const formatData: () => {
    label: string;
    value: string;
    numOfColsRequired?: number;
    type?: 'default' | 'file' | 'fileSmall';
    hideLabel?: boolean;
  }[] = () => {
    let labels = Object.keys(data);

    return labels.map((label) => {
      return { label, value: data[label], type };
    });
  };

  const getStruct = () => {
    if (struct != undefined) {
      return struct;
    }
    let data = formatData();
    let newStruct: struct[] = [];
    for (let i = 1; i <= Math.ceil(data.length / 4); i++) {
      let obj = { numCol: 4 };
      if (i == Math.ceil(data.length / 4)) {
        obj = { numCol: data.length % 4 || 4 };
      }
      newStruct.push(obj);
    }
    return newStruct;
  };

  const formatRows = () => {
    let formattedData = formatData();
    let lastIdx = 0;
    let struct = getStruct();
    return struct.map((i: struct) => {
      let subData = formattedData.slice(lastIdx, lastIdx + i.numCol);
      if (i.attributes) {
        i.attributes.map((d: attribute) => {
          subData[d.index] = {
            ...subData[d.index],
            numOfColsRequired: d.numOfColsRequired,
            type: d.type || type,
          };
        });
      }
      lastIdx += i.numCol;
      return { ...i, data: subData };
    });
  };

  return (
    <div className={classes['entity-dynamic-section']}>
      <div className={classes.title}>
        {title && typeof title == 'string' ? <p>{title}</p> : title}
      </div>

      <div className={classes.body}>
        {formatRows().map((rows, idx: number) => {
          return (
            <div className={classes.rowContainer}>
              {idx > 0 && <div className={classes.break} />}
              <div className={classes.wrapper}>
                {rows.data.map((rd) => (
                  <div
                    className={classes.item}
                    style={{ width: `calc(25% * ${rd.numOfColsRequired})` }}
                  >
                    {!rd.hideLabel && (
                      <p className={classes.label}>{rd.label}</p>
                    )}
                    {!rd.type || rd.type == 'default' ? (
                      <p className={classes.value}>{rd.value}</p>
                    ) : (
                      <ViewFile
                        file={{ name: rd.label, path: rd.value }}
                        size={rd.type == 'file' ? 'large' : 'small'}
                        className={classNames(classes['view-file'])}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EntityDynamicSection;
