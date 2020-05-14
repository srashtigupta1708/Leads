import { Component } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { BaseModalComponent } from '../base.modal.component';
import { Lead } from 'src/app/models/lead.model';

@Component({
  selector: 'app-add-lead',
  templateUrl: './add-lead.component.html',
  styleUrls: ['./add-lead.component.scss']
})
export class AddLeadComponent extends BaseModalComponent<AddLeadComponent, null> {

  public lead: Lead = new Lead();

  constructor(dialogRef: MatDialogRef<AddLeadComponent>) {
    super(dialogRef, null);
  }

}
