import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Repartidor } from '../../class/repartidor';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {

  @Input() actores: Array<Repartidor>;
  @Input() flag: boolean = false;
  @Output() select = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  seleccion(id: number,pais: string){
    this.flag?this.select.emit({id,pais}):this.select.emit(id);
  }

}
