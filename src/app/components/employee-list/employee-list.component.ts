import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
// Update the import path below if your Employee model is located elsewhere
import { Employee } from '../../models/employee';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  templateUrl: './employee-list.component.html',
  imports: [CommonModule, RouterModule]
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private empService: EmployeeService, private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.empService.getAll().subscribe((data) => {
      this.employees = data;
    });
  }

  deleteEmployee(id: number): void {
    if (confirm('Are you sure?')) {
      this.empService.delete(id).subscribe(() => {
        this.loadEmployees();
      });
    }
  }

  editEmployee(id: number): void {
    this.router.navigate(['/employees/edit', id]);
    //this.router.navigate(['/employees/edit/'+id]);
  }

  logout(): void {
  this.auth.logout();
}

}
