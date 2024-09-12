export type NumberOfHeadings = '1' | '2' | '3' | '4' | '5' | '6';


export interface Column {
  key: string;
  barcode: string;
  item: string;
  supplierCode: string;
  size: string;
  available: number;
  inTransit: number;
  total: number;
}