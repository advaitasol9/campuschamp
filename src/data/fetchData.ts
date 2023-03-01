import { PaginationState } from '@tanstack/react-table';

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): any[] => {
    const len = lens[depth]!;
    return range(len).map(() => {
      let s = {
        id: '01',
        department: 'Department of Computer Science...',
        currentHead: 'Dr. Sanjeev Rajendra Rai',
        numCourses: Math.ceil(Math.random() * 10),
        alias: 'DCS',
        degrees: 'Certification, UG, PG',
        students: '1,200',
        professor: '45',
      };
      return s;
    });
  };

  return makeDataLevel();
}

const data = makeData(70);

export function fetchData(
  { pageIndex, pageSize }: PaginationState,
  toSortColumnId: string
) {
  let Data;
  if (toSortColumnId) {
    Data = data.sort((a, b) => a[toSortColumnId] - b[toSortColumnId]);
  } else {
    Data = data;
  }
  return {
    rows: Data.slice(pageSize * pageIndex, pageSize * (pageIndex + 1)),
    pageCount: Math.ceil(Data.length / pageSize),
    totalRowsCount: Data.length,
  };
}
