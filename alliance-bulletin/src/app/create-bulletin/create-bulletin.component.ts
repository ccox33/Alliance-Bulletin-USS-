import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-bulletin',
  template: `
    <body>
      <h1>Create Bulletin</h1>

      <form id="createForm" action="/action_page.php" autocomplete="on">
        <label for="SBsubject">Subject*</label><br>
        <input type="text" id="SBsubject" name="SBsubject" value=""><br><br>

        <label for="lname">Software/Versions Affected*</label><br>
        <input type="text" id="SBsoftware" name="SBsoftware" value=""><br><br>

        <label for="lname">Symptom/Bug*</label><br>
        <input type="text" id="SBsymptom" name="SBsymptom" value=""><br><br>

        <label for="lname">Solution*</label><br>
        <input type="text" id="SBsolution" name="SBsolution" value=""><br><br>

        <label for="lname">Additional Notes</label><br>
        <input type="text" id="SBadditionalnotes" name="SBadditionalnotes" value=""><br><br>

        <input class="button" type="submit" value="Submit">
      </form> 
      <p>*Required Field</p>
    </body>
  `,
  styles: [
  ]
})
export class CreateBulletinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
