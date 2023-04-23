import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';

import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { FormsModule } from '@angular/forms';
import { CustomMinDirective } from './directives/custom-min.directive';
import { BlanksDirective } from './directives/blanks.directive';


@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent,
    CustomMinDirective, //? Directiva , que se usan de forma global  en su modulo donde fue creado
    BlanksDirective
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule //! Formularios por template
  ]
})
export class TemplateModule { }
