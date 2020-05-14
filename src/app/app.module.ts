import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LeadRowComponent } from './components/lead-row/lead-row.component';
import { LocationTypeSelectorComponent } from './components/location-selector/location-selector.component';
import { AddLeadComponent } from './modal-components/add-lead/add-lead.component';
import { MarkUpdateCommunicationComponent } from './modal-components/mark-comm/mark-communication.component';
import { DeleteLeadComponent } from './modal-components/delete-lead/delete-lead.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeadRowComponent,
    AddLeadComponent,
    LocationTypeSelectorComponent,
    MarkUpdateCommunicationComponent,
    DeleteLeadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddLeadComponent, MarkUpdateCommunicationComponent,
    DeleteLeadComponent ]
})
export class AppModule { }
