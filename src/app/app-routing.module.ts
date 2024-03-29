import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path:'template',
    loadChildren:()=>import('./template/template.module').then((m)=>m.TemplateModule)
  },
  {
    path:'reactive',
    loadChildren:()=>import('./reactive/reactive.module').then((m)=>m.ReactiveModule)
  },
  {
    path:'**',
    redirectTo:'template'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
