import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule, LogLevel, OidcConfigService } from 'angular-auth-oidc-client';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { DoctorModule } from './shared/components/doctor/doctor.module';
import { AuthConfigModule } from './auth/auth-config.module';
import { MainNavComponent } from './shared/components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './shared/components/home/home.component';
import { LandingMakeAppointmentComponent } from './shared/components/landing-make-appointment/landing-make-appointment.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ServicesComponent } from './shared/components/services/services.component';
import { ServiceComponent } from './shared/components/services/service/service.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ServiceService} from './services/service.service';
import {MatDialogRef} from '@angular/material/dialog';
import { MatConfirmDialogComponent } from './shared/components/mat-confirm-dialog/mat-confirm-dialog.component';
import { ServicesListComponent } from './shared/components/services/services-list/services-list.component';

export function configureAuth(oidcConfigService: OidcConfigService) {
  return () =>
    oidcConfigService.withConfig({
      stsServer: 'https://localhost:5005',
      redirectUrl: window.location.origin,
      postLogoutRedirectUri: window.location.origin,
      clientId: 'angular_client',
      scope: 'openid profile ApiOne offline_access',
      responseType: 'code',
      silentRenew: true,
      tokenRefreshInSeconds: 60,

      silentRenewUrl: `${window.location.origin}/silent-renew.html`,
      useRefreshToken: true,
      logLevel: LogLevel.Debug,
    });
}

@NgModule({
  declarations: [AppComponent, MainNavComponent, HomeComponent, LandingMakeAppointmentComponent, FooterComponent,
        ServicesComponent, ServiceComponent, MatConfirmDialogComponent, ServicesListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AuthConfigModule,
    LayoutModule,
    DoctorModule
  ],
  providers: [
    ServiceService,
    OidcConfigService,
    {
      provide: MatDialogRef,
      useValue: {}
    },
    {
      provide: APP_INITIALIZER,
      useFactory: configureAuth,
      deps: [OidcConfigService],
      multi: true,
    },
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
