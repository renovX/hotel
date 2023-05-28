import { InjectionToken } from '@angular/core';
import environment from '../environment/environment';
type ev = typeof environment;
export const APP_SERVICE_CONFIG = new InjectionToken<ev>('app.config');
export const APP_CONFIG = { ...environment };
