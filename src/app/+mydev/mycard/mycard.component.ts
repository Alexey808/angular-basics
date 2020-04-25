import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MycardEditService} from '../mycard-edit/mycard-edit.service';

@Component({
  selector: 'app-mycard',
  templateUrl: './mycard.component.html',
  styleUrls: ['./mycard.component.scss']
})
export class MycardComponent implements OnInit {
  img = 'https://angular.io/assets/images/logos/angular/angular.png';
  title = '';
  constructor(
    public mycardService: MycardEditService,
  ) { }

  ngOnInit(): void {}


}
