import { Component, OnInit } from '@angular/core';
import { Employee as Object } from 'src/app/model/employee';
import { EmployeeService as Service } from 'src/app/service/employee.service';
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
      this.router.navigate(["employee/read"]);
    })
  }

  goRead(){
    this.router.navigate(["employee/read"]);
  }

}
