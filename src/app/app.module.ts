import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ServicesComponent } from './shared/components/services/services.component';
import { ServiceComponent } from './shared/components/services/service/service.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ServiceService} from './services/service.service';
import {MatDialogRef} from '@angular/material/dialog';
import { MatConfirmDialogComponent } from './shared/components/mat-confirm-dialog/mat-confirm-dialog.component';

@NgModule({
  declarations: [AppComponent, ServicesComponent, ServiceComponent, MatConfirmDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ServiceService,
  {
    provide: MatDialogRef,
    useValue: {}
  }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
