// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../js/crud.d.ts" />

import { RowID, RowElement } from '../js/interface'
import * as CRUD from './crud'

const row: RowElement = {
	firstName: "Guillaume",
	lastName: "Salva"
}

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
	...row,
	age: 23
}

// Insert row {firstName: "Guillaume", lastName: "Salva"}

CRUD.updateRow(newRowID, updatedRow);
// Update row <newRowID> {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(newRowID);
// Delete row id <newRowID>
