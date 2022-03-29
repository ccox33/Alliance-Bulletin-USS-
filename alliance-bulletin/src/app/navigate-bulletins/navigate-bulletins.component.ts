import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigate-bulletins',
  template: `
    <div class="actions">
    <p><strong>Welcome</strong></p>
    <a href="Create_SB.htm">Create Bulletin</a>
    </div>


    <table id="myTable">
      <tr>
        <th onclick="sortTable(0)">Name</th>
        <th onclick="sortTable(1)">Country</th>
      </tr>
      <tr>
        <td>Berglunds snabbkop</td>
        <td>Sweden</td>
      </tr>
    </table>

    <script>
    function sortTable(n) {
      var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
      table = document.getElementById("myTable");
      switching = true;
      
      dir = "asc"; 
      
      while (switching) {
        
        switching = false;
        rows = table.rows;
        
        for (i = 1; i < (rows.length - 1); i++) {
          
          shouldSwitch = false;
          
          x = rows[i].getElementsByTagName("TD")[n];
          y = rows[i + 1].getElementsByTagName("TD")[n];
          
          if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              
              shouldSwitch= true;
              break;
            }
          } else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              
              shouldSwitch = true;
              break;
            }
          }
        }
        if (shouldSwitch) {
          
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          
          switchcount ++;      
        } else {
          
          if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
          }
        }
      }
    }
    </script>
  `,
  styles: [
  ]
})
export class NavigateBulletinsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
