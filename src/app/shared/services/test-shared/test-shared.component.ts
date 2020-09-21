import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Component({
  selector: 'app-test-shared',
  templateUrl: './test-shared.component.html',
  styleUrls: ['./test-shared.component.scss']
})
export class TestSharedComponent implements OnInit {

  constructor(
    private storageService: LocalStorageService,
  ) { }

  ngOnInit(): void {
    console.log(
      this.storageService.get('test-key')
    );
    this.storageService.set('test-key', 'test');
    console.log(
      this.storageService.get('test-key')
    );
    this.storageService.remove('test-key');
    console.log(
      this.storageService.get('test-key')
    );
  }

}
