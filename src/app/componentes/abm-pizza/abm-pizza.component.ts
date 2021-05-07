import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pizza } from 'src/app/class/pizza';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-abm-pizza',
  templateUrl: './abm-pizza.component.html',
  styleUrls: ['./abm-pizza.component.css']
})
export class AbmPizzaComponent implements OnInit {

  public forma : FormGroup;
  public pizzas : any;
  constructor(private fb:FormBuilder,private storage:StoreService) { }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'nombre':['',Validators.required],
      'ingredientes':['',Validators.required],
      'precio':['',Validators.required],
      'peso': ['',[Validators.required,Validators.min(500),Validators.max(1000)]],
  })
  this.storage.getDoc<any>('Pizzas').subscribe(d =>{
    this.pizzas = d;
  })
  }

  public async aceptar()
  {
    if(this.forma.valid)
    {
      try {
        const list : Array<Pizza> = await this.storage.getList<Pizza>("Pizzas");
        console.log(list);
        await this.storage.setDoc("Pizzas",this.forma.value);
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
