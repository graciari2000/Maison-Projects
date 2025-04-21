import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = 'http://localhost:8802/api/portfolio';

  constructor(private http: HttpClient) {}

  getUserPortfolio(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}`);
  }

  addPortfolioEntry(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
