import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpEmployeeService {

  
  employees: any=[];
  api_url = 'http://localhost:3000/employees';

  constructor(private httpClient: HttpClient) {
  }
  

  
  fetchUserData_angular() {
    this.httpClient.get(this.api_url).subscribe((response: any) => {
      this.employees = response;
    });
    return this.employees;
  }

  addEmployee(newEmployee: any) {
    this.httpClient.post(this.api_url, newEmployee).subscribe(() => {
      this.fetchUserData_angular(); 
    });
    return this.employees;
  }

  deleteEmployee(empId: string) {
    this.httpClient.delete(`${this.api_url}/${empId}`).subscribe(() => {
      this.fetchUserData_angular(); 
    });
    return this.employees;
  }

  editEmployee(empId: string, newEmployee: any) {
    this.httpClient.put(`${this.api_url}/${empId}`, newEmployee).subscribe(() => {
      this.fetchUserData_angular(); 
    });
    return this.employees;
  }
    
}



    
  
    
