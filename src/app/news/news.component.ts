import { Component, OnInit } from '@angular/core';
import {NewslistService } from '../newslist.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  datastore: any;

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