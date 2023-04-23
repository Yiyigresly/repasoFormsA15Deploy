import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent  {

  //! No quiero condiciones sea parte de este objeto
  persona={
    genero:'',
    notificaciones:true
  }

  terminosYCondinciones:boolean=false;

  save(){

    console.log(this.persona)
  }
}
