import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { environment } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class AuthService {

  // private loginUrl = 'http://localhost:8080/api/auth/login';
  private loginUrl = '/api/auth/login';

  // Use the environment variable to build the URL
  //private loginUrl = `${environment.apiUrl}/api/auth/login`;

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http.post<{ token: string }>(this.loginUrl, { username, password });
  }

  saveToken(token: string) {
    localStorage.setItem('jwt_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwt_token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('jwt_token');
    this.router.navigate(['/login']);
  }
}
