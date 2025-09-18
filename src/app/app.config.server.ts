import { config as prerenderConfig } from '../../prerender.config';
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

// دمج كل المسارات في مصفوفة واحدة
const allRoutes = [
  ...serverRoutes,
  ...(Array.isArray(prerenderConfig) ? prerenderConfig : [prerenderConfig])
];

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(allRoutes))
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);