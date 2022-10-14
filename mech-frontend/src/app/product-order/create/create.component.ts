import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car';
import { Client } from 'src/app/model/client';
import { Employee } from 'src/app/model/employee';
import { Product } from 'src/app/model/product';
import { ProductOrder as Object } from 'src/app/model/product-order';
import { CarService } from 'src/app/service/car.service';
import { ClientService } from 'src/app/service/client.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { ProductService } from 'src/app/service/product.service';
import { ProductOrderService as Service } from 'src/app/service/product-order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  car:Car = new Car();
  cars:Car[];
  client:Client = new Client();
  clients:Client[];
  employee:Employee = new Employee();
  employees:Employee[];
  product:Product = new Product();
  products:Product[];
  object:Object = new Object();
  objects:Object[];

  constructor(private employeeService: EmployeeService,
    private clientService: ClientService,
    private carService: CarService,
    private productService: ProductService,
    private service: Service,
    private router: Router) { }

  ngOnInit() {
    this.employeeService.read()
      .subscribe(data=>{
        this.employees = data;
      });
    this.clientService.read()
    .subscribe(data=>{
      this.clients = data;
    });
    this.carService.read()
    .subscribe(data=>{
      this.cars = data;
    });
    this.productService.read()
    .subscribe(data=>{
      this.products = data;
    });
  }

  Create(){
    this.service.create(this.object)
    .subscribe(data=>{
      alert("CREATED");
      this.router.navigate(["admin"]);
    })
  }

  goRead(){
    this.router.navigate(["home"]);
  }
}