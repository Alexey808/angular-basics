import { inject, InjectionToken } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/**
 * Думаю смысла токена на global object document нету, есть импорт DOCUMENT от angular.
 * Данный токен создался для тестирования изменений в DOM
 */
export const MY_DOCUMENT = new InjectionToken<Document>(
  'document global object',
  {
    factory: () => {
      const document = inject(DOCUMENT);

      if (!document) {
        throw new Error('Document is not available');
      }

      return document;
    }
  }
);
