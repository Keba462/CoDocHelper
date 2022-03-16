import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {FileUploadService} from "../../services/file-upload.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent{

  constructor(private uploadService: FileUploadService) { }

  onSubmitFileUploadForm(fileUploadForm: NgForm) {
    this.uploadService.uploadFile(fileUploadForm.value.dataFileFromUser[0]).then(() => {
      alert('File uploaded successfully');
    }).catch(() => {
      alert('Error uploading file');
    });
  }
}
