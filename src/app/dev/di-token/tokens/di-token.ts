import { InjectionToken } from '@angular/core';

export  const  TEST_DI_TOKEN = new InjectionToken<string>(
  'test injection token',
  {
    factory: () => {
      return 'test_di_token';
    }
  }
);
