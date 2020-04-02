import { Component, OnInit } from '@angular/core';
import { Employee } from '../modals/employee.modal';
import { NewEmployeeService } from './new-employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] 
  constructor(private _employeeService: NewEmployeeService) {  }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();

  }

}
