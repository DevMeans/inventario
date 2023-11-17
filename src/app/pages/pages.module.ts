import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages.routing';
import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PagesComponent,
    InicioComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
