import { Component, OnInit } from '@angular/core';
import { Client as Object } from 'src/app/model/client';
import { ClientService as Service } from 'src/app/service/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  objects:Object[];
  constructor(private service: Service, private router: Router) { }

  ngOnInit() {
    this.service.read()
      .subscribe(data=>{
        this.objects = data;
      });
  }
  
  goCreate(){
    this.router.navigate(["client/create"]);
  }

  goUpdate(object:Object):void{
    localStorage.setItem("id",object.id.toString());
    this.router.navigate(["client/update"]);
  }

  Delete(object:Object){
    this.service.delete(object)
    .subscribe(data=>{
      this.objects=this.objects.filter(o=>o!==object);
      alert("DELETED");
    })
  }
}
