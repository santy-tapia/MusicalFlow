import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LOCALE_ID, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);

bootstrapApplication(AppComponent, {
  providers : [ provideRouter(routes),
      { provide: LOCALE_ID, useValue: "es-ES" } ]
}).catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers : [
    appConfig.providers,
    importProvidersFrom(HttpClientModule, RouterModule, ActivatedRoute)
  ]
})
  .catch((err) => console.error(err));


