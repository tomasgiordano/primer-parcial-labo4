import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private login : LoginService,private router : Router) { }

  ngOnInit(): void {
  }

  logout()
  {
    this.login.SignOut();
    this.router.navigate(["login"]);
  }

}
