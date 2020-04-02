import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../modals/employee.modal';

@Component({
  selector: 'app-display-emplyoee',
  templateUrl: './display-emplyoee.component.html',
  styleUrls: ['./display-emplyoee.component.css']
})
export class DisplayEmplyoeeComponent implements OnInit {
 @Input() myemploye: Employee;
  constructor() { }

  ngOnInit(): void {
  }

}
