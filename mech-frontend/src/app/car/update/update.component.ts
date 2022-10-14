import { Component, OnInit } from '@angular/core';
import { Car as Object } from 'src/app/model/car';
import { Client } from 'src/app/model/client';
import { CarService as Service } from 'src/app/service/car.service';
import { ClientService } from 'src/app/service/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  object:Object = new Object();
  objects:Object[];
  client:Client = new Client();
  clients:Client[];

  constructor(private service: Service,
    private clientService: ClientService,
    private router: Router) { }

  ngOnInit() {
    this.readId();
    this.clientService.read()
    .subscribe(data=>{
      this.clients = data;
    });
  }

  readId(){
    let id=localStorage.getItem("id");
    this.service.readId(+id)
    .subscribe(data=>{
      this.object=data;
    })
  }

  Update(object:Object){
    this.service.update(object)
    .subscribe(data=>{
      this.object=data;
      alert("UPDATED");
      this.router.navigate(["car/read"]);
    })
  }

  goRead(){
    this.router.navigate(["car/read"]);
  }
}
