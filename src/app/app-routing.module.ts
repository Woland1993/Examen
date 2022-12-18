import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioCrearComponent } from './formulario-crear/formulario-crear.component';
import { FormularioEditarComponent } from './formulario-editar/formulario-editar.component';
import { GestionEmpresasTableComponent } from './gestion-empresas-table/gestion-empresas-table.component';

const routes: Routes = [{path:"",component:GestionEmpresasTableComponent},
{path:"editar/:id/:nombreComercial/:razonSocial/:telefono/:correo/:nit/:estado/:direccion",component:FormularioEditarComponent},
{path:"new",component:FormularioCrearComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
