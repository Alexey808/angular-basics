import { InjectionToken, Provider } from '@angular/core';
import { NgTemplateOneExampleService } from './ng-template-one-example.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const ROLE_PERMISSIONS_TOKEN = new InjectionToken<boolean>(
  'Return fake token for na-template-one-example',
);

export const ROLE_PERMISSIONS_PROVIDERS: Provider[] = [
  {
    provide: ROLE_PERMISSIONS_TOKEN,
    deps: [ NgTemplateOneExampleService ],
    useFactory: roleFactory
  }
];

export function roleFactory(
  service: NgTemplateOneExampleService,
): Observable<boolean> {
  return service.currentRole$().pipe(
    map((role: string) => role === 'user')
  );
}
