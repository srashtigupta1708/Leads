import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Lead } from '../../models/lead.model';
import { AddLeadComponent } from '../../modal-components/add-lead/add-lead.component';
import { LeadsService } from '../../services/lead.services';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    public leads: Lead[] = [];

    constructor(private matDialog: MatDialog, private leadsService: LeadsService) {

    }

    ngOnInit() {
        this.getLeads();
    }

    public getLeads() {
        this.leadsService.getLeads('India').subscribe(result => {
            this.leads = result;
        });
    }

    public addNewLead(): void {
        const dialogRef = this.matDialog.open(AddLeadComponent, {
            width: '500px',
            height: '350px'
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                console.log(result);
                this.leadsService.saveLead(result).subscribe(saved => {
                    this.getLeads();
                });
            }
        });
    }

}
