import { Component, OnInit } from '@angular/core';
import {NewslistService } from '../newslist.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public datastore: any;
  constructor(private serviceinstance: NewslistService) { }

  ngOnInit(): void {
    this.print();
  }
  print(){
    this.serviceinstance.demo().subscribe(data => {
     console.table(data);
     this.datastore = data;
    });
}
}
