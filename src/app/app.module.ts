import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule, LogLevel, OidcConfigService } from 'angular-auth-oidc-client';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { DoctorModule } from './shared/components/doctor/doctor.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './shared/components/map/map.component'
import { AuthConfigModule } from './auth/auth-config.module';
import { MainNavComponent } from './shared/components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './shared/components/home/home.component';
import { LandingMakeAppointmentComponent } from './shared/components/landing-make-appointment/landing-make-appointment.component';
import { FooterComponent } from './shared/components/footer/footer.component';

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
  declarations: [AppComponent, MainNavComponent, HomeComponent, LandingMakeAppointmentComponent, FooterComponent, MapComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    DoctorModule,
    GoogleMapsModule,
    AuthConfigModule,
    LayoutModule,
    ],
  providers: [
    OidcConfigService,
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
