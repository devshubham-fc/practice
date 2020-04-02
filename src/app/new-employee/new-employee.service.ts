import { Injectable } from '@angular/core';
import { Employee } from '../modals/employee.modal';


@Injectable()
export class NewEmployeeService {
    private listEmployees:Employee[]=[
        {
        id: 1,
        name: 'Mark',
        gender: 'male',
        email: 'ema@jskdj.com',
        phonenumber: 26565654623,
        contactPreference:'email',
        dateOfBirth: new Date('10/07/1998'),
        department: '2',
        isActive: true,
        Photopath:'assets/images/img1.jpg',
        password: null,
        confirmpassword: null,
        },
        {
          id: 2,
          name: 'Loren',
          gender: 'female',
          email: 'loren@jskdj.com',
          phonenumber: 8454695265,
          contactPreference:'email',
          dateOfBirth: new Date('10/07/1998'),
          department: '3',
          isActive: true,
          Photopath:'assets/images/img3.jpg',
          password: null,
          confirmpassword: null,
          }
      ];

      getEmployees(): Employee[] {
          return this.listEmployees;
      }

      save(employee:Employee){
          this.listEmployees.push(employee);
      }
}