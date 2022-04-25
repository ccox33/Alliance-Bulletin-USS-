import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
//https://www.ag-grid.com/eula/AG-Grid-Community-License.html

@Component({
  selector: 'app-navigate-bulletins',
  templateUrl: "./navigate-bulletins.component.html",
  styleUrls: ["./navigate-bulletins.component.css"]
})
export class NavigateBulletinsComponent {

  public columnDefs: ColDef[] = [
      { headerName: 'Date', 
        field: 'date', 
        comparator: dateComparator,
        width: 150,
        sortable: true,
        filter: true,
        floatingFilter:true
      },
      { headerName: 'Bulletin ID', 
        field: 'id', 
        sortable: true,  
        width: 150,
        filter: true,
        floatingFilter: true
      },
      { headerName: 'Subject', 
        field: 'subject', 
        sortable: true, 
        width: 400,
        filter: true,
        floatingFilter:true,
        filterParams: {
          caseSensitive: false,
          filterParams
        }
      },
      { headerName: 'Affected Software', 
        field: 'software', 
        sortable: true, 
        width: 300,
        filter: true,
        floatingFilter:true,
        filterParams: {
          caseSensitive: false,
          filterParams
        }
      }
  ];

  rowData = [
      { date: '11/20/2019', id: '01', subject: 'Problem with main software, bug in code.', software: "D0152 v3.4, D88521 v1.2, D52365 v2.0" },
      { date: '11/25/2021', id: '02', subject: 'A problem with main software, bug in code.', software: "D0052 v3.4, D88521 v1.2, D52365 v2.0" },
      { date: '11/25/2020', id: '25', subject: 'Another problem with main software, bug in code.', software: "D6652 v3.4, D88521 v1.2, D52365 v2.0" },
      { date: '11/23/2021', id: '03', subject: 'Big problem with main software, bug in code.', software: "D0752 v3.4, D88521 v1.2, D52365 v2.0" }
  ];
}

function replaceAccents(value: string) {
  return value
    .replace(new RegExp('[àáâãäå]', 'g'), 'a')
    .replace(new RegExp('æ', 'g'), 'ae')
    .replace(new RegExp('ç', 'g'), 'c')
    .replace(new RegExp('[èéêë]', 'g'), 'e')
    .replace(new RegExp('[ìíîï]', 'g'), 'i')
    .replace(new RegExp('ñ', 'g'), 'n')
    .replace(new RegExp('[òóôõøö]', 'g'), 'o')
    .replace(new RegExp('œ', 'g'), 'oe')
    .replace(new RegExp('[ùúûü]', 'g'), 'u')
    .replace(new RegExp('[ýÿ]', 'g'), 'y')
    .replace(new RegExp('\\W', 'g'), '');
}

const filterParams = {
  textFormatter: replaceAccents,
};

function dateComparator(date1: string, date2: string) {
  const date1Number = monthToComparableNumber(date1);
  const date2Number = monthToComparableNumber(date2);
  if (date1Number === null && date2Number === null) {
    return 0;
  }
  if (date1Number === null) {
    return -1;
  }
  if (date2Number === null) {
    return 1;
  }
  return date1Number - date2Number;
}

function monthToComparableNumber(date: string) {
  if (date === undefined || date === null || date.length !== 10) {
    return null;
  }
  const yearNumber = Number.parseInt(date.substring(6, 10));
  const monthNumber = Number.parseInt(date.substring(3, 5));
  const dayNumber = Number.parseInt(date.substring(0, 2));
  return yearNumber * 10000 + monthNumber * 100 + dayNumber;
}
