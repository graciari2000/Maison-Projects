import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:8802/api/crypto-price';

  constructor(private http: HttpClient) {}

  getUserCryptoPrice(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}`);
  }

  addCryptoPriceEntry(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
