/// <reference path="./crud.d.ts" />

// Import Type and Module
import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// Create object and use function
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
  ...row,
  age: 23
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);