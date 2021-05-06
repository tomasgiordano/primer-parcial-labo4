import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  pais: any;
  @Output() select = new EventEmitter<any>();
  constructor(private PaisesService: PaisesService) { }

  async ngOnInit(): Promise<void> {
    try {
      this.pais = await this.PaisesService.getPaises();
    } catch (error) {
      console.log(error);
    }
  }
  seleccion(value: string){
    this.select.emit(value);
  }
}
