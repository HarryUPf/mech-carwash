import { Component, OnInit } from '@angular/core';
import { Employee as Object } from 'src/app/model/employee';
import { EmployeeService as Service } from 'src/app/service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  object : Object = new Object();
  constructor(private router:Router,private service:Service) { }

  ngOnInit() {
    this.readId();
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
      this.router.navigate(["employee/read"]);
    })
  }

  goRead(){
    this.router.navigate(["employee/read"]);
  }
}
