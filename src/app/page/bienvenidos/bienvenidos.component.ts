import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenidos',
  templateUrl: './bienvenidos.component.html',
  styleUrls: ['./bienvenidos.component.css']
})
export class BienvenidosComponent implements OnInit {

  data:any;

  constructor(private client:HttpClient) { }

  ngOnInit(): void {
    this.client.get("https://api.github.com/users/tomasgiordano").subscribe(a =>{
      this.data = a;
    });
  }


}
