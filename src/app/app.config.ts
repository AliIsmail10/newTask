import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ChartjsModule } from '@ctrl/ngx-chartjs';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),ChartjsModule ]
};
