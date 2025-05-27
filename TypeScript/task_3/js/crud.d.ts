import { RowID, RowElement } from './interface';

export function insertRow(RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): void;