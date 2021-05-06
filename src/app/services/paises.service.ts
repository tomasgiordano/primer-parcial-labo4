import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private HttpClient: HttpClient) { }

  public getPaises(){
    return  new Promise((resolve,reject) => {
      this.HttpClient.get('https://restcountries.eu/rest/v2/all').subscribe((data: []) => {
        resolve(data.slice(0,100));
      },reject);
    });
  }

  public getDetalle(pais: string){
    return  new Promise((resolve,reject) => {
      this.HttpClient.get(`https://restcountries.eu/rest/v2/name/${pais}`).subscribe((data: []) => {
        resolve(data.slice(0,100));
      },reject);
    });
  }
}
