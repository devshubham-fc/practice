import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 @Input() productSelected:boolean = false;
 @Input() selectedprod: string;
 @Output() addedProduct= new EventEmitter<any>();

  onAddProd(){
    this.addedProduct.emit(this.selectedprod);
  }
}
