export class Pelicula{
  id: number;
  nombre: string;
  tipo: 'terror' | 'comedia' | 'amor' | 'otros';
  fecha: string;
  publico: number;
  imagen: string;
  descripcion: string;
  actor: string;

  constructor(id, nombre, tipo, fecha, publico, imagen, descripcion, actor){
    this.id = id;
    this.nombre = nombre;
    this.fecha = fecha;
    this.publico = publico;
    this.imagen = imagen;
    this.descripcion = descripcion;
    this.actor = actor;

    if(tipo == ("terror" || "comedia" || "amor")){
      this.tipo = tipo;
    }else{
      this.tipo = "otros";
    }
  }
}
