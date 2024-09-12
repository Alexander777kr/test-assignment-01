import {ReactNode} from 'react';
import {  HTMLAttributes, Dispatch, SetStateAction} from 'react';
import { type Column } from '../../../utils/types';

export interface FormValues {
  barcode?: string;
  item?: string;
  supplierCode?: string;
  size?: string;
  available?: number;
  inTransit?: number;
  total?: number;
}

export type EditableCellProps = {
  title: string;
  editable: boolean;
  children: ReactNode;
  dataIndex: string;
  record: any;
  handleSave: (row: Column) => void;
  setToggleFiltering: Dispatch<SetStateAction<boolean>>;
} & HTMLAttributes<HTMLDivElement>;

export interface TableBodyProps {
  dataSource: Column[];
  setDataSource: Dispatch<SetStateAction<Column[]>>;
}