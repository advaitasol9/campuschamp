import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  TableOptions,
  useReactTable,
  getSortedRowModel,
  getPaginationRowModel,
  PaginationState,
} from '@tanstack/react-table';
import colors from '../../assets/colors';
import classNames from 'classnames';
import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { MdExpandMore, MdUnfoldMore } from 'react-icons/md';
import classes from './_style.module.scss';

export interface PrimaryTableProps {
  columns: ColumnDef<any, any>[];
  header?: () => React.ReactNode;
  className?: string;
  tableOptions?: TableOptions<any>;
  getDataHandler: (
    pagination: PaginationState,
    toSortColumnId: string
  ) => Promise<any>;
}

// const fuzzyFilter: FilterFn<any> = (row, columnId, value) => {
//   // Rank the item
//   return String(row.getValue(columnId)).includes(value);
// };

// const luzzyFilter: FilterFn<any> = (row, columnId, value) => {
//   // Rank the item
//   return row.getValue(columnId) > value;
// };

const PrimaryTable = ({
  columns,
  header,
  className,
  tableOptions,
  getDataHandler,
}: PrimaryTableProps) => {
  const [rowSelection, setRowSelection] = React.useState({});
  const [{ pageIndex, pageSize }, setPagination] = React.useState<
    PaginationState
  >({ pageIndex: 0, pageSize: 10 });
  const [tableData, setTableData] = React.useState<{
    rows: any[];
    pageCount: number;
    totalRowsCount: number;
  }>({ rows: [], pageCount: -1, totalRowsCount: -1 });
  const [sortedColumnId, setSortedColumnId] = React.useState<string>('');
  // const [globalFilter, setGlobalFilter] = React.useState<string>('');
  // const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
  //   []
  // );

  const pagination = React.useMemo(() => ({ pageIndex, pageSize }), [
    pageIndex,
    pageSize,
  ]);

  const getDataAsync = async () => {
    try {
      const data = await getDataHandler(pagination, sortedColumnId);
      setTableData(data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getDataAsync();
  }, [pagination, sortedColumnId]);

  const defaultData = React.useMemo(() => [], []);

  const table = useReactTable({
    data: tableData.rows ?? defaultData,
    pageCount: tableData.pageCount ?? -1,
    columns,
    // onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    // getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    // onGlobalFilterChange: setGlobalFilter,
    // globalFilterFn: fuzzyFilter,
    // filterFns: {
    //   luzzy: luzzyFilter,
    // },
    ...(tableOptions || {}),
    state: {
      rowSelection,
      pagination,
      ...(tableOptions?.state || {}),
    },
  });

  const getLesserOfTwo = (val1: number, val2: number) => {
    return val1 > val2 ? val2 : val1;
  };

  const getLargerOfTwo = (val1: number, val2: number) => {
    return val1 > val2 ? val1 : val2;
  };

  const getPartVisibleRange = (pageIndex: number, pageCount: number) => {
    let start = getLargerOfTwo(pageIndex - 2, 1);
    let end = getLesserOfTwo(pageIndex + 2, pageCount);
    if (start == 1) {
      end = end + 1 - (pageIndex - 2);
    } else if (end != pageCount) {
      start += 1;
    }
    if (end == pageCount) {
      start = start + pageCount - (pageIndex + 2);
    } else if (start != 1) {
      end -= 1;
    }
    return { start, end };
  };

  const getVisiblePageIndexes = () => {
    let pageCount = table.getPageCount();
    const pageIndex = table.getState().pagination.pageIndex + 1;
    if (pageCount == -1) {
      return [];
    }
    let pageArr: { shouldHide: boolean; value: number | string }[] = [];
    const { start, end } = getPartVisibleRange(pageIndex, pageCount);
    for (let i = 1; i <= pageCount; i++) {
      if (i == 1 || i == pageCount || (i >= start && i <= end)) {
        pageArr.push({ shouldHide: false, value: i });
      } else {
        pageArr.push({ shouldHide: true, value: i });
      }
    }
    if (pageArr.length >= 7) {
      if (pageArr[1].shouldHide) {
        pageArr.splice(1, 1, { shouldHide: false, value: '..' });
      }
      if (pageArr[pageArr.length - 2].shouldHide) {
        pageArr.splice(pageArr.length - 2, 1, {
          shouldHide: false,
          value: '..',
        });
      }
    }

    console.log('pageArr', pageArr);
    return pageArr;
  };

  const handleSortingHandler = (columnId: string) => {
    if (sortedColumnId == columnId) {
      setSortedColumnId('');
    } else {
      setSortedColumnId(columnId);
    }
  };

  // const renderHeader = () => {
  //   return (
  //     <div>
  //       <PrimaryInput
  //         value={globalFilter ?? ''}
  //         onChange={e => {
  //           handlePrimaryInputChange(e, setGlobalFilter);
  //         }}
  //       />
  //       <Button
  //         onClick={() => {
  //           table.getColumn('numCourses').setFilterValue(3);
  //         }}
  //       >
  //         Apply filter
  //       </Button>
  //     </div>
  //   );
  // };

  const renderTable = () => {
    return (
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  onClick={() => {
                    header.column.getCanSort() &&
                      handleSortingHandler(header.column.id);
                  }}
                >
                  {header.isPlaceholder ? null : (
                    <>
                      <div
                        className={classNames(classes['column-header'], {
                          [classes[
                            'cursor-pointer'
                          ]]: header.column.getCanSort(),
                        })}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanSort() && (
                          <div
                            className={classNames(
                              classes['column-header-sort']
                            )}
                          >
                            {header.column.id == sortedColumnId ? (
                              <MdExpandMore size={'14px'} />
                            ) : (
                              <MdUnfoldMore size={'14px'} />
                            )}
                            {/* {!header.column.getIsSorted() ? (
                              <MdUnfoldMore size={'14px'} />
                            ) : header.column.getIsSorted() == 'asc' ? (
                              <MdExpandLess size={'14px'} />
                            ) : header.column.getIsSorted() == 'desc' ? (
                              <MdExpandMore size={'14px'} />
                            ) : null} */}
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => {
            return (
              <tr
                key={row.id}
                className={classNames({
                  [classes['selected-row']]: row.getIsSelected(),
                })}
              >
                {row.getVisibleCells().map(cell => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  const renderPaginationRow = () => (
    <div className={classes.pagination}>
      <p className={classes.currentAndTotalPage}>
        Showing {table.getState().pagination.pageIndex * 10 + 1} to{' '}
        {table.getState().pagination.pageIndex * 10 +
          table.getRowModel().rows.length}{' '}
        {tableData.totalRowsCount > -1 && (
          <span>of {tableData.totalRowsCount}</span>
        )}{' '}
        records
      </p>
      <div className={classes.selectPage}>
        <Button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className={classes.button}
        >
          <div className={classes.nextPrev}>
            <FaAngleLeft
              size={'12px'}
              color={
                !table.getCanPreviousPage()
                  ? colors['light-text']
                  : colors['dark-text']
              }
            />
          </div>
        </Button>
        {getVisiblePageIndexes().map(
          ({
            shouldHide,
            value,
          }: {
            shouldHide: boolean;
            value: number | string;
          }) => {
            if (shouldHide) {
              return null;
            }
            return (
              <Button
                className={
                  value == pageIndex + 1
                    ? classes.selectedPageIdx
                    : classes.pageIdx
                }
                onClick={() => {
                  if (typeof value == 'number') {
                    table.setPageIndex(value - 1);
                  }
                }}
                disabled={shouldHide}
              >
                <p>{value}</p>
              </Button>
            );
          }
        )}

        <Button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className={classes.button}
        >
          <div className={classes.nextPrev}>
            <FaAngleRight
              size={'12px'}
              color={
                !table.getCanNextPage()
                  ? colors['light-text']
                  : colors['dark-text']
              }
            />
          </div>
        </Button>
      </div>
    </div>
  );

  return (
    <div className={classNames(classes.primaryTable, className)}>
      <div className={classes.table}>
        {header && header()}
        {/* {renderHeader()} */}
        <div className={classes.body}>{renderTable()}</div>
      </div>
      {renderPaginationRow()}
    </div>
  );
};

export default PrimaryTable;
