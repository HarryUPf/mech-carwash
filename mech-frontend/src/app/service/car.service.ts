import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car as Object } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) {}

  url='http://localhost:8080/car';

  create(object:Object){
    return this.http.post<Object>(this.url,object);
  }
  read(){
    return this.http.get<Object[]>(this.url);
  }
  readId(id:number){
    return this.http.get<Object>(this.url+"/"+id);
  }
  update(object:Object){
    return this.http.put<Object>(this.url+"/"+object.id,object);
  }
  delete(object:Object){
    return this.http.delete<Object>(this.url+"/"+object.id);
  }
}
