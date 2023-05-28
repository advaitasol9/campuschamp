import 'bootstrap/dist/css/bootstrap.min.css';
import 'appfactory.react.web/dist/appfactory.react.web.cjs.production.min.css';

export type { ParentFC } from './types';

export { default as TableFilters } from './components/TableFilters';
export type {
  TableFiltersProps,
  TableFilterProps,
} from './components/TableFilters';
export {
  default as PrimaryTable,
  PrimaryTableProps,
} from './components/PrimaryTable';
export { default as TableStat, TableStatProps } from './components/TableStat';
export {
  default as PageHeader,
  PageHeaderProps,
} from './components/PageHeader';
export { default as FileInput, FileInputProps } from './components/FileInput';
export { default as ViewFile, ViewFileProps } from './components/ViewFile';

export { default as Dashboard, DashboardProps } from './layouts/Dashboard';
export { default as Footer, FooterProps } from './layouts/Footer';
export { default as Header, HeaderProps } from './layouts/Header';
export {
  default as EntityWrapper,
  EntityWrapperProps,
} from './layouts/EntityWrapper';
export {
  default as EntityDynamicSection,
  EntityDynamicSectionProps,
} from './layouts/EntityDynamicSection';
export {
  default as EntitySection,
  EntitySectionProps,
} from './layouts/EntitySection';
export {
  default as EntitySectionNumericTitle,
  EntitySectionNumericTitleProps,
} from './layouts/EntitySectionNumericTitle';
export {
  default as EntitySectionRow,
  EntitySectionRowProps,
} from './layouts/EntitySectionRow';
export {
  default as EntityFormHeader,
  EntityFormHeaderProps,
} from './layouts/EntityFormHeader';
export {
  default as EntityProfileHeader,
  EntityProfileHeaderProps,
} from './layouts/EntityProfileHeader';
export {
  default as EntityTable,
  EntityTableProps,
} from './layouts/EntityTable';
export {
  default as Navbar,
  NavbarProps,
  NavbarItemProps,
  SelectedNavItemProps,
} from './layouts/Navbar';

export { handleTableFilterChange } from './utils/handleTableFilterChange';
export {
  handleCheckGroupInputInFormChange,
  handleSelectInputInFormChange,
  handlePrimaryInputInFormChange,
  handleAddMoreDateChange,
  handleAddMorePrimaryInputChange,
  handleAddMoreSelectInputChange,
  handleAddMoreFileChange,
  handleAddMoreCheckGroupInputChange,
} from './utils/handleInputChanges';

export { default as tableStatBg } from './assets/img/tableStatBg.png';
