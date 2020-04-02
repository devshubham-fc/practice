import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewslistService {

  constructor(private demohttp: HttpClient) { }
  demo(){
    return this.demohttp.get('https://jsonplaceholder.typicode.com/comments');
  }
}
