import {ChangeDetectionStrategy, Component, ContentChild, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // ререндер только при изменении инпутов
  encapsulation: ViewEncapsulation.None // сделать стили глобальными
})
export class ContentComponent implements OnInit {
  @Input() itemName: string;
  // @ContentChild('info', {static: true}) infoRef: ElementRef;
  @ContentChild('info', {static: true}) infoRef;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.infoRef.nativeElement);
    console.log(this.infoRef);
  }

}
