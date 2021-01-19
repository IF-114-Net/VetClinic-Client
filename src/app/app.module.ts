import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule, LogLevel, OidcConfigService } from 'angular-auth-oidc-client';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthConfigModule } from './auth/auth-config.module';
import { MainNavComponent } from './shared/components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './shared/components/home/home.component';
import { LandingMakeAppointmentComponent } from './shared/components/landing-make-appointment/landing-make-appointment.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ForbiddenComponent } from './shared/components/forbidden/forbidden.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { UnauthorizedComponent } from './shared/components/unauthorized/unauthorized.component';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { MaterialModule } from './modules/material/material.module';

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
      unauthorizedRoute: 'unauthorized',
      forbiddenRoute: 'forbidden',
       
      silentRenewUrl: `${window.location.origin}/silent-renew.html`,
      useRefreshToken: true,
      logLevel: LogLevel.Debug,
    });
}

@NgModule({
  declarations: [AppComponent, MainNavComponent, HomeComponent, LandingMakeAppointmentComponent, FooterComponent, ForbiddenComponent, NotFoundComponent, UnauthorizedComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AuthConfigModule,
    LayoutModule,
    HttpClientModule,
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
