import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';

import { DoctorValidationExceptionComponent } from 'src/app/shared/components/doctor/doctor-validation-exception/doctor-validation-exception.component';
import { ConfimDialogComponent } from 'src/app/shared/components/dialogs/assess-dialog/confim-dialog.component';



@NgModule({
    declarations: [
        DoctorValidationExceptionComponent,
        ConfimDialogComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ], exports: [
        DoctorValidationExceptionComponent,
        ConfimDialogComponent
    ]
})
export class SharedModule {
}
