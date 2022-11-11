import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  datos:any = [];
  constructor(protected usuarios: UsuariosService) 
  {
    this.usuarios.lista_usuarios().subscribe
    (
      (res:any) => {
        console.log(res);
        this.datos = res.data;
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
  }

}
