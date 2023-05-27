import { FormDataTypeProps } from 'appfactory.react.web/dist/types';
import { file } from '../components/FileInput';
import React from 'react';

const handleCheckGroupInputInFormChange = (
  item: any,
  field: string,
  state: any,
  setState: React.Dispatch<React.SetStateAction<any>>
) => {
  setState({ ...state, [field]: item });
};

const handlePrimaryInputInFormChange = (
  item: React.FormEvent<HTMLInputElement>,
  field: string,
  state: any,
  setState: React.Dispatch<React.SetStateAction<any>>
) => {
  setState({ ...state, [field]: (item.target as HTMLInputElement).value });
};

const handleSelectInputInFormChange = (
  item: React.FormEvent<HTMLSelectElement>,
  field: string,
  state: any,
  setState: React.Dispatch<React.SetStateAction<any>>
) => {
  setState({ ...state, [field]: (item.target as HTMLSelectElement).value });
};

const handleAddMorePrimaryInputChange = (
  e: React.FormEvent<HTMLInputElement>,
  idx: number,
  key: string,
  state: Record<string, any>[],
  setState: React.Dispatch<React.SetStateAction<Record<string, any>[]>>
) => {
  let tempArr = [...state];
  tempArr[idx] = {
    ...tempArr[idx],
    [key]: (e.target as HTMLInputElement).value,
  };
  setState(tempArr);
};

const handleAddMoreSelectInputChange = (
  e: React.FormEvent<HTMLSelectElement>,
  idx: number,
  key: string,
  state: Record<string, any>[],
  setState: React.Dispatch<React.SetStateAction<Record<string, any>[]>>
) => {
  let tempArr = [...state];
  tempArr[idx] = {
    ...tempArr[idx],
    [key]: (e.target as HTMLSelectElement).value,
  };
  setState(tempArr);
};

const handleAddMoreDateChange = (
  date: any,
  idx: number,
  key: string,
  state: Record<string, any>[],
  setState: React.Dispatch<React.SetStateAction<Record<string, any>[]>>
) => {
  let tempArr = [...state];
  tempArr[idx] = {
    ...tempArr[idx],
    [key]: date,
  };
  setState(tempArr);
};

const handleAddMoreFileChange = (
  files: file[],
  idx: number,
  key: string,
  state: Record<string, any>[],
  setState: React.Dispatch<React.SetStateAction<Record<string, any>[]>>
) => {
  let tempArr = [...state];
  tempArr[idx] = {
    ...tempArr[idx],
    [key]: files,
  };
  setState(tempArr);
};

const handleAddMoreCheckGroupInputChange = (
  item: FormDataTypeProps[],
  idx: number,
  key: string,
  state: Record<string, any>[],
  setState: React.Dispatch<React.SetStateAction<Record<string, any>[]>>
) => {
  let tempArr = [...state];
  tempArr[idx] = {
    ...tempArr[idx],
    [key]: item,
  };
  setState(tempArr);
};

export {
  handleCheckGroupInputInFormChange,
  handleSelectInputInFormChange,
  handlePrimaryInputInFormChange,
  handleAddMoreDateChange,
  handleAddMorePrimaryInputChange,
  handleAddMoreSelectInputChange,
  handleAddMoreFileChange,
  handleAddMoreCheckGroupInputChange,
};
