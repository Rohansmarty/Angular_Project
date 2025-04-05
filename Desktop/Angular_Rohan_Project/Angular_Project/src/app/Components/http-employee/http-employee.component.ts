import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpEmployeeService } from '../../Services/http-employee.service';
import { EmployeeAddComponent } from "../employee-add/employee-add.component";
import { HttpEmployeeAddComponent } from "../http-employee-add/http-employee-add.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-http-employee',
  imports: [HttpEmployeeAddComponent,
   FormsModule
  ],
  templateUrl: './http-employee.component.html',
  styleUrl: './http-employee.component.css'
})
export class HttpEmployeeComponent {

 
  employees: any;


  

  constructor(private HttpEmployeeService:HttpEmployeeService) {
    this.fetchUserData_angular();
  }
 

 
  fetchUserData_angular() {
    this.employees=this.HttpEmployeeService.fetchUserData_angular();   
  }
  addEmployee(newEmployee:any){
    this.employees=this.HttpEmployeeService.addEmployee(newEmployee);
  }
  deleteUser(num:string){
    this.employees=this.HttpEmployeeService.deleteEmployee(num);

  }


Name1: string = '';
usern1: string = '';
email1: string = '';
currentEditId: string = ''; 

viewdetails(name: string, username: string, email: string, id: string) {
  this.Name1 = name;
  this.usern1 = username;
  this.email1 = email;
  this.currentEditId = id; 
}
    
    updateUser() {

      let updatedUser={
        id: this.currentEditId,
        name: this.Name1,
        username: this.usern1,
        email: this.email1
      };
      this.HttpEmployeeService.editEmployee(this.currentEditId,updatedUser);  
    }
    
  
  

}
