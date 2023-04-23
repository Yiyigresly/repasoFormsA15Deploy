import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

 @ViewChild('myform') myform!:NgForm;

 // Inicializando el formulario
  initForm={
     producto:'',
     precio:10,
     existencias:50
  }

 //Guardar en el formulario
  save(){

     if(this.myform.invalid){

       return
     }
     console.log(this.myform.value)

     this.myform.resetForm({
      producto:'Sin Nombre',
       precio:0,
       existencias:0
     });

  }


  formError(campo:string){

    // if(campo=='producto'){
      //   if(this.myform?.controls[campo]?.value.trim().length <= 2){
      //     this.myform.controls[campo].setErrors({
      //        blanks:true
      //     });    
      //   }
      // }

    return   this.myform?.controls[campo]?.touched 
             && this.myform.controls[campo]?.errors 
             
  }

}
