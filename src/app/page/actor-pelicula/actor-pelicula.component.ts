import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/class/peliculas';
import { StoreService } from '../../services/store.service';
import { PaisesService } from '../../services/paises.service';
import { Repartidor } from 'src/app/class/repartidor';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {

  actores: Array<Repartidor>;
  actor: Repartidor;
  peliculas: Array<Pelicula>;
  pais: any;
  constructor(private StoreService: StoreService, private PaisesService: PaisesService) { }

  ngOnInit(): void {
    this.StoreService.getDoc<Repartidor>('Repartidores').subscribe(data => this.actores = data);
  }

  async seleccion(value){
    try {
      const p =  await this.PaisesService.getDetalle(value.pais);
      this.pais = p[0];
      console.log(this.pais);
      this.actor = this.actores.filter(a => a.dni == value.id)[0];
    } catch (error) {

    }
  }

}
