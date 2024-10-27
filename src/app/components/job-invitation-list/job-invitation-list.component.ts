import { Component, OnInit } from '@angular/core';
import { JobInvitationService } from '../../services/job-invitation.service';

@Component({
  selector: 'app-job-invitation-list',
  templateUrl: './job-invitation-list.component.html',
  styleUrls: ['./job-invitation-list.component.scss']
})
export class JobInvitationListComponent implements OnInit {
  currentTab: string = 'invited';  // Controla a aba ativa
  invitations: any[] = [];  // Convites recebidos
  acceptedInvitations: any[] = [];  // Convites aceitos

  constructor(private jobInvitationService: JobInvitationService) {}

  ngOnInit(): void {
    this.loadInvitations();  // Carrega convites recebidos
    this.loadAcceptedInvitations();  // Carrega convites aceitos
  }

  // Carregar convites
  loadInvitations() {
    this.jobInvitationService.getJobInvitations().subscribe(data => {
      this.invitations = data;
    });
  }

  // Carregar convites aceitos
  loadAcceptedInvitations() {
    this.jobInvitationService.getAcceptedInvitations().subscribe(data => {
      this.acceptedInvitations = data;
    });
  }

  // Aceitar convite
  acceptJob(jobId: number) {
    this.jobInvitationService.acceptJob(jobId).subscribe(() => {
      this.loadInvitations();  // Recarrega a lista após aceitar
      this.loadAcceptedInvitations();  // Recarrega a lista de aceitos
    });
  }

  // Recusar convite
  declineJob(jobId: number) {
    this.jobInvitationService.declineJob(jobId).subscribe(() => {
      this.loadInvitations();  // Recarrega a lista após recusar
    });
  }
}
