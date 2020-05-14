import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Lead } from '../../models/lead.model';
import { MatDialog } from '@angular/material/dialog';
import { LeadsService } from '../../services/lead.services';
import { MarkUpdateCommunicationComponent } from '../../modal-components/mark-comm/mark-communication.component';
import { DeleteLeadComponent } from '../../modal-components/delete-lead/delete-lead.component';

@Component({
    selector: 'app-lead-row',
    templateUrl: 'lead-row.component.html',
    styleUrls: ['lead-row.component.scss']
})
export class LeadRowComponent {
    @Input()
    public lead: Lead;

    @Output()
    public commUpdated: EventEmitter<number> = new EventEmitter<number>();

    @Output()
    public deleted: EventEmitter<number> = new EventEmitter<number>();

    constructor(private matDialog: MatDialog, private leadsService: LeadsService) {
    }

    public markUpdate() {
        const dialogRef = this.matDialog.open(MarkUpdateCommunicationComponent, {
            width: '500px',
            height: '300px',
            data: this.lead
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === true) {
                this.commUpdated.emit(this.lead.id);
            }
        });
    }

    public deleteLead() {
        const dialogRef = this.matDialog.open(DeleteLeadComponent, {
            width: '400px',
            height: '150px',
            data: this.lead.id
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === true) {
                this.deleted.emit(this.lead.id);
            }
        });
    }

}
