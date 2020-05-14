import { MatDialogRef, } from '@angular/material/dialog';

export abstract class BaseModalComponent<T, I> {

    constructor(protected matDialogRef: MatDialogRef<T>, protected dialogInput: I) {

    }

    public closeDialog(dialogResult: any){
        this.matDialogRef.close(dialogResult);
    }

    public cancelDialog() {
        this.closeDialog(null);
    }
}
