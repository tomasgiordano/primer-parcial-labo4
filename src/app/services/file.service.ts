import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private file : AngularFireStorage) { }

  public async storeFile(path: string, element: any){
    return new Promise(async (resolve, reject) => {
      try {
        const data = await this.file.upload(path,element);
        const url = await data.ref.getDownloadURL();

        resolve(url);
      } catch (error) {
        reject(error);
      }
    })
  }

}
