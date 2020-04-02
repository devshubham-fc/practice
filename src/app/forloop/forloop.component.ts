import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forloop',
  templateUrl: './forloop.component.html',
  styleUrls: ['./forloop.component.css']
})
export class ForloopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products =[
    {proimg: '', name:'Laptop', id:'pro01', price: 2500},
    {proimg: '', name:'Mobile', id:'pro01', price: 3500},
    {proimg: '', name:'T.v', id:'pro01', price: 9500},
    {proimg: '', name:'Washing Machine', id:'pro01', price: 6500},
    {proimg: '', name:'Gyser', id:'pro01', price: 10500}
  ];
  selectedProduct: string;
  getProductval(val){
    this.selectedProduct = val.target.value;
  }
}
