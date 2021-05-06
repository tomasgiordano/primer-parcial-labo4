import { Component, OnInit } from '@angular/core';
import { validateEventsArray } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from 'src/app/services/store.service';
import { Actor } from '../../class/actor';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.css']
})
export class AltaActoresComponent implements OnInit {

  public forma : FormGroup;

  constructor(private fb:FormBuilder,private storage:StoreService) { }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'nombre':['',Validators.required],
      'apellido':['',Validators.required],
      'edad': ['',[Validators.required,Validators.min(18),Validators.max(99)]],
      'correo':['',[Validators.required,Validators.email]],
      'pais':['',Validators.required],
  })
}

  seleccion(value){
    // console.log(value);
    this.forma.get('pais').setValue(value);
  }

  public async aceptar():Promise<void>
  {
    if(this.forma.valid)
    {
      try {
        const list : Array<Actor> = await this.storage.getList<Actor>("Actores");
        console.log(list);
        list.forEach((l: Actor)=>{
          if(l.correo === this.forma.get('correo').value)throw "Este email ya esta tomado...";
        });
        await this.storage.setDoc("Actores",this.forma.value);
        this.forma.reset();
        window.alert("Encuesta enviada correctamente, gracias por participar!");
      } catch (error) {
        window.alert(error);
      }
    }
    else{
      window.alert("Por favor, complete correctamente los campos antes de enviar el formulario.");
    }
  }
}
