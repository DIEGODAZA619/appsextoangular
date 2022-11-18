import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Buffer} from 'Buffer';




@Injectable({
  providedIn: 'root'
})


export class UsuariosService 
{
  reqHeader     : HttpHeaders;  
  tokenguardado : any = localStorage.getItem('token');
  
  token         : any = Buffer.from(this.tokenguardado, 'base64').toString('binary');
  
  //console.log(this.tokenguardado);
  //token  = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZHVzdWFyaW8iOiIxIiwiZmVjaGEiOiIyMDIyLTExLTE4IDAyOjU3OjM2IiwiaWF0IjoxNjY4NzM2NjU2LCJleHAiOjE2Njg3NDAyNTZ9.kA5_W5IVy2MLPxlZsBT9h7-4bSy6bqEQUM16h7LUToE';
  
  constructor(protected http:HttpClient) { 
    console.log(this.token);

    this.reqHeader = new HttpHeaders({
       'Content-type': 'application/json',
       'Authorization' : this.token 
    })
  }

  lista_usuarios()
  {
    return this.http.get("http://localhost/sextosemestre/index.php/api/Usuarios/getlistausuarios",{headers:this.reqHeader});
  }

  eliminarToken()
  {
    return this.http.get("http://localhost/sextosemestre/index.php/api/Login/cerrarSession")    
  }
}
