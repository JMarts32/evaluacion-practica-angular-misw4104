import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Cafe } from './cafe';

@Injectable({
  providedIn: 'root'
})
export class CafeService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient ) { }

  getCafes(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(this.apiUrl);
  }
}
