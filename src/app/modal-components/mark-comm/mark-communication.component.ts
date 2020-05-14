import { Component, Inject } from '@angular/core';
import { BaseModalComponent } from '../base.modal.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LeadsService } from '../../services/lead.services';
import { Lead } from '../../models/lead.model';

@Component({
    selector: 'app-mark-comm',
    templateUrl: './mark-communication.component.html',
    styleUrls: ['./mark-communication.component.scss']
})
export class MarkUpdateCommunicationComponent extends BaseModalComponent<MarkUpdateCommunicationComponent, Lead> {
    public lead: Lead;

    constructor(dialogRef: MatDialogRef<MarkUpdateCommunicationComponent>, private leadsService: LeadsService,
                @Inject(MAT_DIALOG_DATA) lead: Lead) {
        super(dialogRef, lead);
        this.lead = this.dialogInput;
    }

    public markUpdate() {
        this.leadsService.markLead(this.lead.id, this.lead.communication)
            .subscribe(saved => this.closeDialog(true));
    }
}
