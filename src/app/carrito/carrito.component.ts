import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit 
{
  titulo:string;
  estado:boolean;
  categorias: any = [];

  constructor() {
    this.titulo = "CARRITO DIEGO DE COMPRAS"
    this.estado = true;
    this.categorias.push("ROPA");
    this.categorias.push("MUEBLES");
    this.categorias.push("JUGUETES");
   }

  ngOnInit(): void {
  }
  cerrar_tienda()
  {
    if(this.estado)
    {
      this.estado = false;
    }
    else
    {
      this.estado = true;
    }
    
  }
}

