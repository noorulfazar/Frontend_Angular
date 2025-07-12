import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/employee';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // private apiUrl = 'http://localhost:8080/api/employees';
  private apiUrl = '/api/employees';

  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }

  // constructor(private http: HttpClient) {}
  constructor(
    private http: HttpClient,
    private authService: AuthService //  Inject AuthService here
  ) {}

  get httpOptionsWithString() {
    return {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.authService.getToken(),
        'Access-Control-Allow-Origin': 'localhost',
        'Content-Type': 'application/json;charset=utf-8'
      })
    };
  }

  getAll(): Observable<Employee[]> {
    console.log('Get all Employee service called');
    console.log('apiUrl: ', this.apiUrl);
    return this.http.get<Employee[]>(this.apiUrl, this.httpOptionsWithString);
  }

  getById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`, this.httpOptionsWithString);
  }

  create(employee: Employee): Observable<Employee> {
    // return this.http.post<Employee>(this.apiUrl, employee);
    return this.http.post<Employee>(this.apiUrl, JSON.stringify(employee), this.httpOptionsWithString);
  }

  update(id: number, employee: Employee): Observable<Employee> {
    console.log('Route param ID in service: ', id);
    console.log('now this employee in service: ', employee);
    console.log('url in service: ', `${this.apiUrl}/${id}`);
    // return this.http.put<Employee>(`${this.apiUrl}/${id}`, employee);
    // return this.http.put<Employee>(`${this.apiUrl}/${id}`, JSON.stringify(employee), this.httpOptionsWithString);
    return this.http.patch<Employee>(`${this.apiUrl}/${id}`, JSON.stringify(employee), this.httpOptionsWithString);
  }

  delete(id: number): Observable<void> {
    // return this.http.delete<void>(`${this.apiUrl}/${id}`);
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.httpOptionsWithString);
  }
}
