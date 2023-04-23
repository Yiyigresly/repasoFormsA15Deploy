import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[//! Exporto los componentes que quiero usar fuera de este modulo, a traves de su etiqueta, No lazyload ni rutas
    SidemenuComponent 
  ]
})
export class SharedModule { }
