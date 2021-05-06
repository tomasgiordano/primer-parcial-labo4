import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../class/peliculas';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-busquedaspeliculas',
  templateUrl: './busquedaspeliculas.component.html',
  styleUrls: ['./busquedaspeliculas.component.css']
})
export class BusquedaspeliculasComponent implements OnInit {

  id : number;
  peliculas: Array<Pelicula>;
  peliculaSeleccionada: Pelicula = null;
  constructor(private StoreService: StoreService) { }

  ngOnInit(): void {
    this.StoreService.getDoc<Pelicula>('Peliculas').subscribe(data => this.peliculas = data);
  }

  async seleccionPelicula(value){
    try {
      const list = await this.StoreService.getList<Pelicula>('Peliculas');
      this.peliculaSeleccionada = list.filter(a => a.id == value)[0];
    } catch (error) {
      console.log(error);
    }
  }
}
