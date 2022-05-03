import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSummernoteDirective, NgxSummernoteModule } from 'ngx-summernote';
import { Subject } from 'rxjs';
import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { Bulletin } from 'src/app/bulletin.interface';
import { DataService } from 'src/app/services/data.service';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-create-bulletin',
  templateUrl: "./create-bulletin.component.html",
  styleUrls: ["./create-bulletin.component.css"]
})
export class CreateBulletinComponent implements OnInit {

  public dataService : DataService;
  public selectedBulletin : Bulletin;
  public isAuthorizedUser: boolean = false;

  constructor(public router: Router, private route: ActivatedRoute, public dataServiceInput : DataService) 
  {
    this.dataService = dataServiceInput;
    this.dataService.selectedBulletin.subscribe((bulletin) => this.selectedBulletin = bulletin);
    console.log(this.selectedBulletin);

    this.bulletinForm.patchValue({subject: this.selectedBulletin.Topic});
  }



  bulletinForm = new FormGroup({
    subject: new FormControl('',  Validators.required),
    software: new FormControl('',  Validators.required),
    symptom: new FormControl('',  Validators.required),
    solution: new FormControl('',  Validators.required),
    notes: new FormControl('')
  });

  
  //subject.summernote('insertText', this.selectedBulletin.subject);
  //ngxSummernote.insertText(this.selectedBulletin.subject);

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
    //alert("Are you sure you want to submit this form?");
    console.warn(this.bulletinForm.value);
    this.postBulletin();
    this.router.navigate(['navigate-bulletins']);
  };

  discard() {
    alert("Are you sure you want to discard this form?\nYou will be routed back to the navigation page.");
    this.bulletinForm.reset;
  }

  ngOnInit(): void {

    //Get is authorized!
    // We have a data service function that accepts an email string as a parameter and
    // returns true if the email is contained in the authorized database.
    // The app component keeps an isAuthorized variable that we want to reference in this
    // component to verify certain actions.
  }

  getBulletin(modelID: number){

    this.dataService.getBulletin(modelID).subscribe((res) => {
      this.selectedBulletin = res;
    })

  }

  postBulletin() {
    
    console.warn(this.selectedBulletin.BulletinId);

    const newBulletin: Bulletin = {
      BulletinId:this.selectedBulletin.BulletinId, 
      DateCreated: this.selectedBulletin.DateCreated, 
      Topic: this.bulletinForm.value.subject, 
      Software: this.bulletinForm.value.software, 
      Symptom: this.bulletinForm.value.symptom, 
      Resolution: this.bulletinForm.value.solution,
      Notes: this.bulletinForm.value.notes,
      Noteimage: this.selectedBulletin.Noteimage,
      IsDeleted:false,
      DateModified: this.selectedBulletin.DateModified
    }

    console.warn(newBulletin);
    this.dataService.updateBulletin(newBulletin);
  }

  deleteBulletin() {
    if (this.selectedBulletin.BulletinId != 0)
    {
      alert("Are you sure you want to delete this form?\nYou will be routed back to the navigation page.");

      this.selectedBulletin.IsDeleted = true;

      this.dataService.updateBulletin(this.selectedBulletin);
    }
    this.router.navigate(['navigate-bulletins']);
  }
}
