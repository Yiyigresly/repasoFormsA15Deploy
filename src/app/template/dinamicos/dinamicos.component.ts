import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
   nombre:string;
   favoritos:Favorito[]
}
interface Favorito{
  id:number;
  nombre:string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {


 
  persona:Persona={

    nombre:'Guisell',
    favoritos:[
      {
        id:1,
        nombre:'Metal Gear'
      },
      {
        id:2,
        nombre:'Deathtranding'
      },
    ]
  }

  new_favorito:string='';

  ngOnInit(): void {
  }

  // Guardar formulario
  save(){
  

     console.log(this.persona)
    //this.myform.resetForm();
  }

  // Agregar favorito al array favoritos
  agregar(){
   
    if(this.new_favorito.trim().length<=2) return ;

     this.persona.favoritos.push({
         id:this.persona.favoritos.length + 1,
         nombre:this.new_favorito
     })

     this.new_favorito='';
  }

  delete(i:number){

    this.persona.favoritos.splice(i,1);
  }

}
