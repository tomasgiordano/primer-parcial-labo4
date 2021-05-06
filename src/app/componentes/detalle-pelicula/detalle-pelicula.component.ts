import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../class/peliculas';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula;
  constructor() { }

  ngOnInit(): void {
  }

}
