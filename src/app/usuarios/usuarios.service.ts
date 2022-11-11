import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(protected http:HttpClient) { }

  lista_usuarios()
  {
    return this.http.get("http://localhost/sextosemestre/index.php/api/Usuarios/getlistausuarios");
  }
}
