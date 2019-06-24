import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions={
  header : new HttpHeaders({'Content-Type':'application7json'})
}

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http:HttpClient) {}
    
  getBikes(){
      return this.http.get('/server/api/v17bikes');
    }
}
