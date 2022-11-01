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
  productos: any = [];
  cant_venta:number = 1; 

  constructor() {
    this.titulo = "CARRITO DIEGO DE COMPRAS"
    this.estado = true;
    this.categorias.push("ROPA");
    this.categorias.push("MUEBLES");
    this.categorias.push("JUGUETES");
    //-------------
    this.productos.push({
                          nombre:"CHAMARRA",
                          precio: 250,
                          cantidad: 12
                        });
    this.productos.push({
                          nombre:"PELOTA",
                          precio: 100,
                          cantidad: 3
                        }); 
    this.productos.push({
                          nombre:"sombrero",
                          precio: 100,
                          cantidad: 3
                        });                        
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
  cambio(data : any)
  {
    this.cant_venta = data.target.value;
  }

  eliminar_producto(i : number)
  {
    this.productos.splice(i, 1);
  }
}

