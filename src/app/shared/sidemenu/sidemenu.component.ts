import { Component } from '@angular/core';


interface menuItem{
   texto:string,
   ruta:string
}
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
      li{
        cursor:pointer
      }
    `
  ]
})
export class SidemenuComponent  {

  menuTemplate:menuItem[]=[
      {
         texto:'básicos',
         ruta:'/template/basicos'
      },
      {
        texto:'dinámicos',
        ruta:'/template/dinamicos'
     },
     {
      texto:'switches',
      ruta:'/template/switches'
   },
  ];


  menuReactive:menuItem[]=[
    {
       texto:'básicos',
       ruta:'/reactive/basicos'
    },
    {
      texto:'dinámicos',
      ruta:'/reactive/dinamicos'
   },
   {
    texto:'switches',
    ruta:'/reactive/switches'
 },
]

}
