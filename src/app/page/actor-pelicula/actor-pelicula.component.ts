import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/class/actor';
import { Pelicula } from 'src/app/class/peliculas';
import { StoreService } from '../../services/store.service';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {

  actores: Array<Actor>;
  actor: Actor;
  peliculas: Array<Pelicula>;
  pais: any;
  constructor(private StoreService: StoreService, private PaisesService: PaisesService) { }

  ngOnInit(): void {
    this.StoreService.getDoc<Actor>('Actores').subscribe(data => this.actores = data);
  }

  async seleccion(value){
    try {
      const list = await this.StoreService.getList<Pelicula>("Peliculas");
      const p =  await this.PaisesService.getDetalle(value.pais);
      this.pais = p[0];
      console.log(this.pais);
      this.peliculas = list.filter(p => p.actor == value.id);
      this.actor = this.actores.filter(a => a.correo == value.id)[0];
    } catch (error) {

    }
  }

}
