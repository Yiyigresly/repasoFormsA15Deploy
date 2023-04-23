import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";

//! Esta directiva SOLO se puede usar, si tiene un ngModel asociado
//Obvio se usara en un formulario, concreatmente un input
@Directive({
    selector:'[customMin][ngModel]',
    providers:[
        {
            provide:NG_VALIDATORS,
            useExisting:CustomMinDirective,
            multi:true

        }
    ]
})
export class CustomMinDirective implements Validator{

   @Input() minimo!:number;

   constructor(){}

   validate(control:FormControl){
     
      const inpuValue=control.value;
      //console.log(inpuValue)
      return (inpuValue < this.minimo) ? {customMin:true} : null;

   }

}