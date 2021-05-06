import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { FirebaseService } from 'src/app/services/firebase.service';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  error : string = "";
  correo :string = '';
  clave : string = '';
  flag : boolean = false;

  formLogin : FormGroup;

  constructor(
    public loginService : LoginService,
    public router : Router,
    private fb : FormBuilder) { }
  ngOnInit(): void {
    this.formLogin = this.fb.group({
      correo : ['',[
        Validators.required,
      ]],
      clave : ['',[
        Validators.required,
      ]]
    })
  }

  async Login()
  {
    this.error =' ';
    if(this.formLogin.valid){
      let correo = this.formLogin.get('correo').value;
      let clave = this.formLogin.get('clave').value;
      this.loginService.SignIn(correo,clave)
      .then(()=>{
        this.loginService.SetSesionActual(correo);
        this.router.navigate(['']);
      }).catch(aux=>{
        this.error ='No existe usuario';
      })
    }
  }

  Register()
  {
    this.router.navigate(['./registro']);
  }

  async onSignInAnonimous()
  {
    this.error =' ';
      let correo = "anonimus@anonimus.com";
      let clave = "123456";
      this.loginService.SignIn(correo,clave)
      .then(()=>{
        this.loginService.SetSesionActual(correo);
        this.router.navigate(['']);
      }).catch(aux=>{
        this.error ='No existe usuario';
      })
    
  }
}
