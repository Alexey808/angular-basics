import { TestBed } from '@angular/core/testing';

import { DataLoaderResolvers } from './data-loader.resolvers';

describe('DataLoaderService', () => {
  let service: DataLoaderResolvers;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLoaderResolvers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
