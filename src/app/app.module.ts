import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { ForloopComponent } from './forloop/forloop.component';
import { ListEmployeeComponent } from './new-employee/list-employee.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CreateEmployeeComponent } from './new-employee/create-employee.component';
import { UxformComponent } from './uxform/uxform.component';
import { ConfirmEqualValidatorDirective } from './modals/shared/confirm-equal-validator.directive';
import { NewEmployeeService } from './new-employee/new-employee.service';
import { DisplayEmplyoeeComponent } from './new-employee/display-emplyoee.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    EmployeeComponent,
    EmployeedetailComponent,
    ForloopComponent,
    ListEmployeeComponent,
    ParentComponent,
    ChildComponent,
    CreateEmployeeComponent,
    UxformComponent,
    ConfirmEqualValidatorDirective,
    DisplayEmplyoeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    DataTablesModule
  ],
  providers: [NewEmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
