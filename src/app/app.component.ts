import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { IUserInfoModel } from './models/user-info.model';

@Component({
               selector   : 'app',
               templateUrl: './app.component.html',
               styleUrls  : ['./app.component.css'],
           })

export class AppComponent implements OnInit{
    public userForm: FormGroup;
    constructor(public dialog: MatDialog){
    }

    ngOnInit(): void {
        this.userForm = new FormGroup({
            firstName: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]+")]),
            lastName: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]+")]),
            addressLine1: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9 ]+")]),
            addressLine2: new FormControl('', [Validators.pattern("[a-zA-Z0-9 ]+")]),
            city: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]+")]),
            state: new FormControl('', Validators.required),
            zip: new FormControl('', [Validators.required, Validators.pattern("[0-9]{5,5}")]),
        });
    }

    public onSubmit(){
        this.openDialog(this.userForm.value);
    }

    private openDialog(input: IUserInfoModel) {
        this.dialog.open(FormDialogComponent, {
            width: '300px',
            data: input
        });
    }
}