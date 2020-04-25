import {Component, Input, OnInit} from '@angular/core';
import {MycardEditService} from './mycard-edit.service';

@Component({
  selector: 'app-mycard-edit',
  templateUrl: './mycard-edit.component.html',
  styleUrls: ['./mycard-edit.component.scss']
})
export class MycardEditComponent implements OnInit {
  bool = false;
  arr = [1, 2, 3, 4, 5];
  constructor(
    public mycardSerice: MycardEditService,
  ) { }

  ngOnInit(): void {
  }

  onInput(event: KeyboardEvent) {
    this.mycardSerice.editCardTitle = (event.target as HTMLInputElement).value;
  }
  onBlur(value: string) {
    this.mycardSerice.editCardTitle = value;
  }
}
