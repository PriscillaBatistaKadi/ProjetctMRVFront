import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // Importe o módulo aqui
import { AppComponent } from './app.component';
import { JobInvitationListComponent } from './components/job-invitation-list/job-invitation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    JobInvitationListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  // Adicione o HttpClientModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }