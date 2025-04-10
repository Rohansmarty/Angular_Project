import { Component } from '@angular/core';
import { DataBindingComponent } from "../data-binding/data-binding.component";
import { DirectivesComponent } from "../directives/directives.component";
import { UserListComponent } from "../user-list/user-list.component";
import { ProductListComponent } from "../product-list/product-list.component";
import { EmployeeCRUDComponent } from "../employee-crud/employee-crud.component";
import { PipesComponent } from "../pipes/pipes.component";
import { ParentComponent } from "../parent/parent.component";
import { StudentComponent } from '../student/student.component';
import { EmployeeCRUDParentComponent } from "../employee-crudparent/employee-crudparent.component";
import { EmployeeTCComponent } from "../employee-tc/employee-tc.component";
import { HttpEmployeeComponent } from "../http-employee/http-employee.component";
import { FolderComponent } from "../folder/folder.component";
import { ObservableComponent } from "../observable/observable.component";
import { SubjectDemo2Component } from "../subject-demo2/subject-demo2.component";
import { TemplateDrivenComponent } from "../template-driven/template-driven.component";

// import { ElectronicsComponent } from "../electronics/electronics.component";
// import { EssentialsComponent } from "../essentials/essentials.component";

@Component({
  selector: 'app-body',
  imports: [
   
    TemplateDrivenComponent
],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
