import { Component, OnInit } from '@angular/core';
import { validateEventsArray } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from 'src/app/services/store.service';
import { Repartidor } from '../../class/repartidor';

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
      'dni':['',Validators.required],
      'nombre':['',Validators.required],
      'edad':['',Validators.required],
      'capacidad': ['',[Validators.required]],
      'pais':['',Validators.required],
      'unidadPropia':['',[Validators.required]],
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
        const list : Array<Repartidor> = await this.storage.getList<Repartidor>("Repartidores");
        console.log(list);
        await this.storage.setDoc("Repartidores",this.forma.value);
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
