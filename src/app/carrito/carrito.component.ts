import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  carrito: any = [];
  total_pagar: number = 0;

  productoform = new FormGroup({
    nombre: new FormControl(''),
    precio: new FormControl(''),
    cantidad: new FormControl(''),    
  }); 

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

  eliminar_carrito(i : number)
  {
    this.carrito.splice(i, 1);
    this.calcular_total_pagar();
  }
  agregar_carrito(prod: any)
  {
    this.carrito.push({
      nombre:prod.nombre,
      precio: prod.precio,
      cantidad: this.cant_venta,
      subtotal :prod.precio * this.cant_venta
    });
    this.calcular_total_pagar();
    this.cant_venta = 1;
  }
  calcular_total_pagar()
  {
    this.total_pagar = 0;
    for(let i=0; i< this.carrito.length; i++)
    {
      this.total_pagar += this.carrito[i].subtotal
    }
  }

  agregar_productos()
  {
    this.productos.push(this.productoform.value);
  }
}

