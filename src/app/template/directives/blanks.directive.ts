import { Directive } from "@angular/core";
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";


@Directive({
    selector:'[blanks][ngModel]',
    providers:[
        {
            provide:NG_VALIDATORS,
            useExisting:BlanksDirective,
            multi:true
        }
    ]
})

export class BlanksDirective implements Validator{


    validate(control:FormControl): ValidationErrors | null {
        
        const inputValue=control.value;
        //console.log(inputValue)
        return ( inputValue?.trim().length <= 2) ? { blanks :true } :null;
    }
   


}