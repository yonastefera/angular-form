import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormDialogComponent } from './form-dialog/form-dialog.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDialogModule,
    ],
    declarations: [AppComponent, FormDialogComponent],
    entryComponents:[FormDialogComponent],
    bootstrap: [AppComponent],
})

export class AppModule {
}