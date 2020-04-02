import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ForloopComponent } from './forloop/forloop.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { ListEmployeeComponent } from './new-employee/list-employee.component';
import { ParentComponent } from './parent/parent.component';
import { CreateEmployeeComponent } from './new-employee/create-employee.component';
import { UxformComponent } from './uxform/uxform.component';



const routes: Routes = [
    { path:'', component:ListEmployeeComponent},
    { path:'home', component:ListEmployeeComponent},
    { path:'create', component:CreateEmployeeComponent},
    { path:'news', component:NewsComponent},
    { path:'forloop', component:ForloopComponent},
    { path:'employee', component:EmployeeComponent},
    { path:'employee/:id', component:EmployeedetailComponent},
    { path:'datatable', component:EmployeedetailComponent},
    { path:'parent', component:ParentComponent},
    { path:'uxform', component:UxformComponent}
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }