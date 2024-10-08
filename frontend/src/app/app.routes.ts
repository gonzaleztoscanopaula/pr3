import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';

export const routes: Routes = [
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
  { path: 'productos', component: ListaProductosComponent },
  { path: 'productos/crear', component: CrearProductoComponent },
  { path: 'productos/editar/:id', component: EditarProductoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }