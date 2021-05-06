import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../../class/peliculas';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() pelicula: Array<Pelicula>;
  @Input() flag: boolean = false;
  @Output() select = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  seleccion(id: number){
    this.select.emit(id);
  }

}
