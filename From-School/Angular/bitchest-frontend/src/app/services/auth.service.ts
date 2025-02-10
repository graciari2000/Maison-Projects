import { Injectable } from '@angular/core';
import { User } from '../../app/models/user.model'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  apiUrl: string = 'https://localhost:8802';
  isLoggedInSubject: any;
  router: any;

  constructor(private http: HttpClient) { }

  registerUser(newUser: User) : Observable<User>
  {
    newUser.id = '';
    return this.http.post<User>(this.apiUrl + '/api/User/register', newUser);
  }
  loginUser(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl + '/api/User/login', { username, password });
  }
  public isAuthenticated() : boolean {
    const token = localStorage.getItem('authToken');
    const helper = new JwtHelperService();
    const isExpired = helper.isTokenExpired(token);
    return !isExpired;
  }

  logout(): void {
    localStorage.removeItem('token'); // Remove token
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/login']); // Redirect to login page
  }

  register(username: string, password: string, email: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { username, password, email });
  }
}
