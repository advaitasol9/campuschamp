import { TableFiltersProps } from '../components/TableFilters';

const handleTableFilterChange = (
  { id, title, data }: TableFiltersProps,
  filters: TableFiltersProps[],
  setFilters: React.Dispatch<React.SetStateAction<TableFiltersProps[]>>
) => {
  const tempArr = [...filters];
  let idx = tempArr.findIndex(itm => itm.id == id);
  tempArr[idx] = { id, title, data };
  setFilters(tempArr);
};

export { handleTableFilterChange };
