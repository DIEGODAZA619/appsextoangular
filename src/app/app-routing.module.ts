import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';

const routes: Routes = [
  {path:'carrito',component:CarritoComponent},
  {path:'publicaciones', component:PublicacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
