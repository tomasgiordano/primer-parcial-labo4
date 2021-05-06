import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from 'src/app/services/store.service';
import { FileService } from '../../services/file.service';
import { Actor } from '../../class/actor';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  public actores: Array<Actor>;
  public forma : FormGroup;

  constructor(
    private fb: FormBuilder,
    private storage: StoreService,
    private file: FileService) { }

  ngOnInit(): void {
    this.storage.getDoc<Actor>('Actores').subscribe(data => {
      this.actores = data;
    });
    this.forma = this.fb.group({
      'nombre':['',Validators.required],
      'fecha':['',Validators.required],
      'descripcion': ['',Validators.required],
      'publico':['',Validators.required],
      'tipo':['',Validators.required],
      'imagen':['',[Validators.required]],
      'actor':['',Validators.required],
  })
}

  seleccion(value){
    console.log(value);
    this.forma.get('actor').setValue(value);
  }

  upload(event, form) {
    form.setValue( event.target.files[0]);
  }

  public async aceptar()
  {
    console.log(this.forma);
    if(this.forma.valid)
    {
      const pelicula = this.forma.value;
      try {
        const url = await this.file.storeFile("peliculas/"+pelicula.nombre, this.forma.get('imagen').value);
        let id: any = await this.storage.getList<number>("IdPeliculas");
        pelicula.imagen = url;
        pelicula.id = id[0].id;
        console.log(pelicula);
        await this.storage.setDoc('Peliculas',pelicula);
        await this.storage.setDoc("IdPeliculas",pelicula.id++);
        window.alert("Se a creado una nueva pelicula!!!");
      } catch (error) {
        window.alert(error);
      }
    }
    else{
      window.alert("Por favor, complete correctamente los campos antes de enviar el formulario.");
    }
  }
}
