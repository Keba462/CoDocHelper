import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent{

  constructor() { }

  onSubmitFileUploadForm(fileUploadForm: NgForm) {
    console.log(fileUploadForm.value);
  }
}
