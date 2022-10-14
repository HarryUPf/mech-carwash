import { Component, OnInit } from '@angular/core';
import { Car as Object } from 'src/app/model/car';
import { Client } from 'src/app/model/client';
import { CarService as Service } from 'src/app/service/car.service';
import { ClientService } from 'src/app/service/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  object:Object = new Object();
  objects:Object[];
  client:Client = new Client();
  clients:Client[];
  
  constructor(private service: Service,
    private clientService: ClientService,
    private router: Router) { }

  ngOnInit() {
    this.service.read()
    .subscribe(data=>{
      this.objects = data;
    });
    this.clientService.read()
    .subscribe(data=>{
      this.clients = data;
    });
  }

  Create(){
    this.service.create(this.object)
    .subscribe(data=>{
      alert("CREATED");
      this.router.navigate(["car/read"]);
    })
  }

  goRead(){
    this.router.navigate(["car/read"]);
  }

}
