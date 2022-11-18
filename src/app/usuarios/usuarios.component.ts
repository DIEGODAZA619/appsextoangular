import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { Router } from '@angular/router';
import { Buffer} from 'Buffer';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  datos:any = []; 
  token:any;
  constructor(protected usuarios: UsuariosService, protected router:Router) 
  {
    this.usuarios.lista_usuarios().subscribe
    (
      (res:any) => {
        console.log(res);
        this.datos = res.data;
      },
      (error:any)=>{
        //console.log(error);
        this.router.navigate(["/login"]);
      }
    );
  }

  ngOnInit(): void {
  }

  cerrar_sesion()
  {
    this.router.navigate(["/login"]);
    this.usuarios.eliminarToken().subscribe(
      (res:any) =>{
        if(res.error == false)
        {          
          this.token =  Buffer.from(res.token).toString('base64');          
          localStorage.setItem('token',this.token);           
        }        
      },
      (error:any)=>{
        console.log(error);
      }
    )   
    
  } 

}
