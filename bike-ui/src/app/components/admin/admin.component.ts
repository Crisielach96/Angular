import { Component, OnInit } from '@angular/core';
//importamos el serivce a utilizar
import {BikeService} from '../../services/bike.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
public bikes;
//inyectamos el service en el constructor del components
  constructor(private bikeService: BikeService) { }
  ngOnInit() {
    //le decimos al componente que llame a la funcion GetBikes
    this.getBikes();
  }
  //creo una funcion que llame al service y sirva para 
  //recorrer las bikes que este service nos devuelve y la 
  //la almacenamos en la variable bikes
  getBikes(){
    //llamamos al servicio de bikes que devuelve un 
    //observable y nos suscribimos a ello
    this.bikeService.getBikes().subscribe(
      data => {this.bikes =data },//obtenemos los datos 
       err => {console.error(err)},//obtengo un error
       ()=> console.log('bikes loaded')//cerramos session en 
      //la consola 
    );
  }
}
