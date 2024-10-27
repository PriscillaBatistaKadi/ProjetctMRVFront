import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobInvitationService {
  private apiUrl = 'https://localhost:7199';  // Substitua com a URL da sua API

  constructor(private http: HttpClient) {}

  // Obter lista de convites
  getJobInvitations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/Invited/GetInviteds`);
  }

  // Obter lista de convites aceitos
  getAcceptedInvitations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/Invited/GetAcceptedS`);
  }

  // Aceitar um convite
  acceptJob(jobId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/Invited/Accepted${jobId}`, {});
  }

  // Recusar um convite
  declineJob(jobId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/Invited/Decline${jobId}`, {});
  }
}
