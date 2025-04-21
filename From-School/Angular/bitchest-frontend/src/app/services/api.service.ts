import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = '/api'; // Uses proxy to forward to localhost:8802

  constructor(private http: HttpClient) {}

  // Fetch cryptocurrency prices
  getCryptoPrices(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cryptos`);
  }

  // Fetch user portfolio
  getUserPortfolio(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/portfolio/${userId}`);
  }

  // Buy cryptocurrency
  buyCrypto(userId: string, data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/trade/buy/${userId}`, data);
  }

  // Sell cryptocurrency
  sellCrypto(userId: string, data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/trade/sell/${userId}`, data);
  }
}
