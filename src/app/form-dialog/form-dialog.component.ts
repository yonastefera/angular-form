import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { IUserInfoModel } from '../models/user-info.model';

@Component({
    selector: 'form-dialog',
    templateUrl: './form-dialog.component.html',
    styleUrls: ['./form-dialog.component.css']
})
export class FormDialogComponent{
    constructor(private thisDialogRef: MatDialogRef<FormDialogComponent>,
                @Inject(MAT_DIALOG_DATA) private data: IUserInfoModel) { }

    public getUserInfo() {
        const result = [];
        result.push({title: "First name: ", value: this.data.firstName});
        result.push({title: "Last name: ", value: this.data.lastName});
        result.push({title: "Address line 1: ", value: this.data.addressLine1});
        result.push({title: "Address line 2: ", value: this.data.addressLine2});
        result.push({title: "City: ", value: this.data.city});
        result.push({title: "State: ", value: this.data.state});
        result.push({title: "Zip: ", value: this.data.zip});
        return result;
    }

    onCloseConfirm() {
        this.thisDialogRef.close('Confirm');
    }
    onCloseCancel() {
        this.thisDialogRef.close('Cancel');
    }
}