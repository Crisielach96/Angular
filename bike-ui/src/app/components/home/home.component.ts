import { Component, OnInit } from '@angular/core';
import {BikeService} from '../../services/bike.service'
import {FormGroup, FormControl, Validator, Validators} from '@angular/forms'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  models : string[] = [
    'bicicleta 14 pulgadas marca phillips',
    'Globo Carbon fiber Race Series',
    'Master bicicleta macri gato',
  ];

  bikeform : FormGroup;

  validMessage: string = "";

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    this.bikeform = new FormGroup({
      name : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required),
      phone : new FormControl('',Validators.required),
      model : new FormControl('',Validators.required),
      serialNumber : new FormControl('',Validators.required),
      purchasePrice : new FormControl('',Validators.required),
      purchaseDate : new FormControl('',Validators.required),
      contact : new FormControl(),
    });
  }

  submitRegistration(){
    if(this.bikeform.valid){
      this.validMessage="Su formulario de Bike se envio con exito wacho"
      this.bikeService.createBikeRegistration(this.bikeform.value).subscribe()

    }else {
      this.validMessage="Por favor intentalo mas tarde, hubo un error"
    }
  }

}
