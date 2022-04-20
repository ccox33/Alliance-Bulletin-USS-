import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-navigate-bulletins',
  templateUrl: "./navigate-bulletins.component.html",
  styleUrls: ["./navigate-bulletins.component.css"]
})
export class NavigateBulletinsComponent {
  columnDefs: ColDef[] = [
    { headerName: 'Date', field: 'date', sortable: true, maxWidth: 100 },
    { headerName: 'Bulletin ID', field: 'id', sortable: true, minWidth: 100, maxWidth: 150},
    { headerName: 'Subject', field: 'subject', sortable: true, minWidth: 500 },
    { headerName: 'Affected Software', field: 'software', sortable: true, minWidth: 450 }
];

rowData = [
    { date: '11/20/19', id: '01', subject: 'Problem with main software, bug in code.', software: "D0152 v3.4, D88521 v1.2, D52365 v2.0" },
    { date: '11/25/21', id: '02', subject: 'A problem with main software, bug in code.', software: "D0052 v3.4, D88521 v1.2, D52365 v2.0" },
    { date: '11/25/20', id: '25', subject: 'Another problem with main software, bug in code.', software: "D6652 v3.4, D88521 v1.2, D52365 v2.0" },
    { date: '11/23/21', id: '03', subject: 'Big problem with main software, bug in code.', software: "D0752 v3.4, D88521 v1.2, D52365 v2.0" }
];
}