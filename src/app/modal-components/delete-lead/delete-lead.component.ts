import { Component, Inject } from '@angular/core';
import { BaseModalComponent } from '../base.modal.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LeadsService } from '../../services/lead.services';

@Component({
    selector: 'app-delete-lead',
    templateUrl: './delete-lead.component.html',
    styleUrls: ['./delete-lead.component.scss']
})
export class DeleteLeadComponent extends BaseModalComponent<DeleteLeadComponent, number> {
    public leadId: number;

    constructor(dialogRef: MatDialogRef<DeleteLeadComponent>, private leadsService: LeadsService,
                @Inject(MAT_DIALOG_DATA) commMessage: number) {
        super(dialogRef, commMessage);
        this.leadId = this.dialogInput;
    }

    public deleteLead() {
        this.leadsService.deleteLead(this.leadId).subscribe(deleted => {
            this.closeDialog(true);
        });
    }
}
