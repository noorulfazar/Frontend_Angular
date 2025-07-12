import { Component, OnInit } from '@angular/core';
// Update the import path below if your Employee model is located elsewhere
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  templateUrl: './employee-form.component.html',
  imports: [ CommonModule, FormsModule, RouterModule]
})
export class EmployeeFormComponent implements OnInit {
  employee: Employee = { name: '', department: '', salary: 0 };
  isEdit: boolean = false;

  constructor(
    private empService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // const id = this.route.snapshot.params['id'];
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Route param ID: ', id);
    if (id) {
      this.isEdit = true;
      this.empService.getById(+id).subscribe((res) => {
        console.log('Fetched full response: ', res);  //  Check if data comes
        this.employee = res;
        console.log('now this employee: ', this.employee);
      }
      );
    }
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.empService.update(this.employee.id!, this.employee).subscribe(() => {
        this.router.navigate(['/employees']);
      });
    } else {
      this.empService.create(this.employee).subscribe(() => {
        this.router.navigate(['/employees']);
      });
    }
  }
}
