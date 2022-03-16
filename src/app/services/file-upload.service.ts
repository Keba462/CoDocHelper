import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private readonly filePath = 'data/';
  constructor(private storage: Storage) { }

  uploadFile(file: File) {
    return uploadBytes(ref(this.storage, this.filePath+file.name), file);
  }
}
