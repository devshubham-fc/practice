import { Component, OnInit } from '@angular/core';
import { NewslistService } from '../newslist.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {
  datas : any;
  constructor(private serviceinstance: NewslistService) { 
    
  }
  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
    };

    this.serviceinstance.demo().subscribe(data =>{
      this.datas = data;
      this.dtTrigger.next();
    });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
