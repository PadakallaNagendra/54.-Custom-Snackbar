import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SipDashboardService {

  constructor(private httpClient: HttpClient) { }

  getsipdashboard(): Observable<any[]>
  {
    return this.httpClient.get<any[]>(`http://localhost:5148/api/Dashboard`);
  }
}
