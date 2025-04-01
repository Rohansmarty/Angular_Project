import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';
import { SearchPipe } from '../../pipes/search.pipe';
import { AgePipe } from '../../pipes/age.pipe';
import { FormsModule } from '@angular/forms';
import { SalutationPipe } from '../../pipes/salutation.pipe';

@Component({
  selector: 'app-pipes',
  imports: [
    CommonModule,
    FormsModule,
    OrdinalPipe,
    SearchPipe,
    AgePipe,
    SalutationPipe
    

   
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
  
})
export class PipesComponent {

  // myName: string = 'viRaT koHLi';
  // mySal: number = 5000;
  // today: Date = new Date();
  // user = { name: 'virat', age: 40, add: 'mumbai' }
  // arr = [10, 20, 30, 40, 50, 60, 70]


  ordiNum:number=0;
  birthDate=new Date('2000-11-14');

  searchTerm: string = '';
  employees = [
    { id: 1, name: 'Rohan', birthDate: new Date(2000, 11, 14), gender: 'Male', position: 'Developer' },
    { id: 2, name: 'Ram', birthDate: new Date(1998, 3, 22), gender: 'Male', position: 'Designer' },
    { id: 3, name: 'chanakya', birthDate: new Date(1996, 1, 1), gender: 'Male', position: 'Manager' },
    { id: 4, name: 'lady', birthDate: new Date(1999, 9, 10), gender: 'Female', position: 'Developer' },

    
  ];


}
