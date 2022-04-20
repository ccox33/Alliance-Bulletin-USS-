import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-create-bulletin',
  templateUrl: "./create-bulletin.component.html",
  styleUrls: ["./create-bulletin.component.css"]
})
export class CreateBulletinComponent implements OnInit {
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
    uploadImagePath: '/api/upload',
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
  };

  discard() {
    alert("Are you sure you want to discard this form?\nYou will be routed back to the navigation page.");
    this.bulletinForm.reset;
  }

  constructor() { }

  ngOnInit(): void {

  }

}
