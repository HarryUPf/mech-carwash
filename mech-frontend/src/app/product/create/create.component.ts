import { Component, OnInit } from '@angular/core';
import { Product as Object } from 'src/app/model/product';
import { ProductService as Service } from 'src/app/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  object:Object = new Object();
  objects:Object[];
  constructor(private service: Service, private router: Router) { }

  ngOnInit() {
    this.service.read()
    .subscribe(data=>{
      this.objects = data;
    });
  }

  Create(){
    this.service.create(this.object)
    .subscribe(data=>{
      alert("CREATED");
      this.router.navigate(["product/read"]);
    })
  }

  goRead(){
    this.router.navigate(["product/read"]);
  }

}
