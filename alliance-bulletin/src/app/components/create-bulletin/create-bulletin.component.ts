import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bulletin } from 'src/app/bulletin.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-create-bulletin',
  templateUrl: "./create-bulletin.component.html",
  styleUrls: ["./create-bulletin.component.css"]
})
export class CreateBulletinComponent implements OnInit {

  public selectedID = 0;
  public dataService : DataService;
  public selectedBulletin : Bulletin;
  public isAuthorizedUser: boolean = false;

  bulletinForm = new FormGroup({
    subject: new FormControl('',  Validators.required),
    software: new FormControl('',  Validators.required),
    symptom: new FormControl('',  Validators.required),
    solution: new FormControl('',  Validators.required),
    notes: new FormControl('')
  });

  config = {
    placeholder: '',
    tabsize: 2,
    height: 200,
    toolbar: [
        ['misc', ['codeview', 'undo', 'redo']],
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
        ['fontsize', ['fontname', 'fontsize', 'color']],
        ['para', ['style', 'ul', 'ol', 'paragraph', 'height']],
        ['insert', ['table', 'picture', 'link', 'video', 'hr']]
    ],
    fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times']
  }

  create(){
    console.warn(this.bulletinForm.value);
    alert("Are you sure you want to submit this form?");
    console.warn(this.bulletinForm.value);
    this.postBulletin();
    this.router.navigate(['navigate-bulletins']);
  };

  discard() {
    alert("Are you sure you want to discard this form?\nYou will be routed back to the navigation page.");
    this.bulletinForm.reset;
  }

  constructor(public router: Router, private route: ActivatedRoute, public dataServiceInput : DataService) 
  {
    this.dataService = dataServiceInput;
  }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.selectedID = id;
    if (this.selectedID > 0)
    {
      // The Title of the Page Label needs to be changed here
      let pageLabel = document.getElementById("pageLabel")
      pageLabel.innerText = "Edit Bulletin"
      this.getBulletin(this.selectedID);
      
    }
    else
    {
      this.dataService.createDefault().subscribe((res) => {
        this.selectedBulletin = res;
      })
    }
    console.warn(this.selectedID);
  }

  getBulletin(modelID: number){

    this.dataService.getBulletin(modelID).subscribe((res) => {
      this.selectedBulletin = res;
    })

  }

  postBulletin() {
    this.selectedBulletin.bulletinId = this.selectedID;
    
    console.warn(this.selectedBulletin.bulletinId);

    this.selectedBulletin.topic = this.bulletinForm.get('subject').value;
    this.selectedBulletin.software = this.bulletinForm.get('software').value;
    this.selectedBulletin.symptom = this.bulletinForm.get('symptom').value;
    this.selectedBulletin.resolution = this.bulletinForm.get('solution').value;
    this.selectedBulletin.notes = this.bulletinForm.get('notes').value;

    this.dataService.updateBulletin(this.selectedBulletin);
  }

  deleteBulletin() {
    if (this.selectedID != 0)
    {
      alert("Are you sure you want to delete this form?\nYou will be routed back to the navigation page.");
      this.dataService.updateBulletin(this.selectedID);
    }
  }

}
