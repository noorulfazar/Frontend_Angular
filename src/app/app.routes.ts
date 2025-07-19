// import { Routes } from '@angular/router';
// import { EmployeeListComponent } from './components/employee-list/employee-list.component';
// import { EmployeeFormComponent } from './components/employee-form/employee-form.component';

// export const routes: Routes = [
//   { path: '', redirectTo: 'employees', pathMatch: 'full' },
//   { path: 'employees', component: EmployeeListComponent },
//   { path: 'employees/new', component: EmployeeFormComponent },
//   { path: 'employees/edit/:id', component: EmployeeFormComponent },
// ];

//import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeeListComponent, canActivate: [AuthGuard] },
  { path: 'employees/new', component: EmployeeFormComponent, canActivate: [AuthGuard] },
  { path: 'employees/edit/:id', component: EmployeeFormComponent, canActivate: [AuthGuard] }
];
