import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../modals/department.modal';
import { Employee } from '../modals/employee.modal';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { NewEmployeeService } from './new-employee.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
  bsConfig: Partial<BsDatepickerConfig>;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phonenumber: null,
    email: '',
    dateOfBirth: null,
    department: null,
    isActive: null,
    Photopath: null,
    password: null,
    confirmpassword: null,
  };
  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'}
  ]
  constructor(private _employeeService: NewEmployeeService,
    private _router: Router) {
    this.bsConfig = Object.assign({}, {containerClass: 'theme-dark-blue'});
   }

  ngOnInit(): void {
  }
saveEmployee():void{
  this._employeeService.save(this.employee);
  this._router.navigate(['home']);
}

  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }
}
