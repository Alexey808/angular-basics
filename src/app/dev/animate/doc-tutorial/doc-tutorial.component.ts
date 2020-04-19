import { Component, HostBinding, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition, stagger, query, keyframes,
} from '@angular/animations';


const ngIfAnimation = [
  // void => * || :enter || * => *
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1s', style({ opacity: 1 }))
  ]),
  // * => void || :leave || * => *
  transition(':leave', [
    animate('0.5s', style({ opacity: 0 }))
  ]),
];

const colorState = [
  state('gray', style({
    backgroundColor: 'gray'
  })),
  state('green', style({
    backgroundColor: 'green'
  })),
  state('red', style({
    backgroundColor: 'red'
  })),
  state('blue', style({
    backgroundColor: 'blue'
  })),
  transition('void => gray', [
    animate('3s')
  ]),
  transition('* <=> *', [
    animate('.5s')
  ]),
];

const ngForAnimation = [
  transition(':enter, * => 0, * => -1', []),

  transition(':increment', [
    query(':enter', [
      style({ opacity: 0, width: '0px' }),
      stagger(50, [
        animate('500ms ease-out', style({ opacity: 1, width: '*' }))
      ])
    ], {optional: true})
  ]),

  transition(':decrement', [
    query(':leave', [
      stagger(50, [
        animate('300ms ease-out', style({ opacity: 0, width: '0px' })),
      ]),
    ])
  ]),

];

const boolAnimation = [
  state('true', style({ height: '*', width: '*' })),
  state('false', style({ height: '0px', width: '0px' })),
  transition('false <=> true', animate(500))
];

const loaderAnimation = [
  state('start', style({
    backgroundColor: 'gray'
  })),
  state('done', style({
    backgroundColor: 'green'
  })),
  transition('* => start', [
    animate('5s')
  ]),
  transition('* => done', [
    animate('.5s')
  ]),
];

const keyFramesAnimation = [
  transition('* => active', [
    animate('2s', keyframes([
      style({ backgroundColor: 'blue', offset: 0}),
      style({ backgroundColor: 'red', offset: 0.8}),
      style({ backgroundColor: 'orange', offset: 1.0})
    ])),
  ]),
  transition('* => inactive', [
    animate('2s', keyframes([
      style({ backgroundColor: 'orange', offset: 0}),
      style({ backgroundColor: 'red', offset: 0.2}),
      style({ backgroundColor: 'blue', offset: 1.0})
    ]))
  ]),
];

const ngForActiveAnimation = [
  transition('* => *', [
    query('.active', [
      style({ backgroundColor: 'green', opacity: 0, transform: 'translateY(-100px)'}),
      stagger(-30, [
        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ backgroundColor: 'blue', opacity: 1, transform: 'none' }))
      ])
    ], {optional: true})
  ])
];

const ngForActiveTr = [
  transition('* => true', [
    animate('1s', keyframes([
      style({ backgroundColor: 'orange', offset: 0, transform: 'scale(1)' }),
      style({ backgroundColor: 'red', offset: 0.8, transform: 'scale(1.1)'}),
      style({ backgroundColor: 'orange', offset: 1.0, transform: 'scale(1)'})
    ])),
  ]),
  // transition('* => false', [
  //   animate('2s', keyframes([
  //     style({ backgroundColor: 'orange', offset: 0}),
  //     style({ backgroundColor: 'red', offset: 0.2}),
  //     style({ backgroundColor: 'blue', offset: 1.0})
  //   ]))
  // ]),
];

@Component({
  selector: 'app-doc-tutorial',
  templateUrl: './doc-tutorial.component.html',
  styleUrls: ['./doc-tutorial.component.scss'],
  animations: [
    trigger('ngIfTrigger', ngIfAnimation),
    trigger('colorState', colorState),
    trigger('ngForTrigger', ngForAnimation),
    trigger('booleanTrigger', boolAnimation),
    trigger('loadTrigger', loaderAnimation),
    trigger('isAllAnimationDisabled', []),
    trigger('keyFramesTrigger', keyFramesAnimation),
    trigger('ngForActiveTrigger', ngForActiveAnimation),
    trigger('ngForActiveTr', ngForActiveTr),
  ]
})
export class DocTutorialComponent implements OnInit {
  ngIfBool = false;
  colorState = 'gray';
  array = [1, 2, 3, 4, 5];
  boolAnimation = false;
  isDisabledChildAnimation = false;
  isLoaded = false;
  keyframes = 'inactive';
  arrayItems = [{num: 1, checked: false}, {num: 2, checked: true}, {num: 3, checked: false}];

  @HostBinding('@.disabled') public isAllAnimationDisabled = false;

  constructor(
  ) { }

  ngOnInit(): void {
  }


  toggleBoolAnimation() {
    this.boolAnimation = !this.boolAnimation;
  }

  runNgIfAnimation(): void {
    this.ngIfBool = !this.ngIfBool;
  }

  runSetColorState(stateName: string): void {
    this.colorState = stateName;
  }

  addToArray(): void {
    const newNumArray = this.array.length + 1;
    this.array.push(newNumArray);
  }

  removeToArray(num: number): void {
    this.array = this.array.filter(x => x !== num);
  }

  stopChildAnimation() {
    this.isDisabledChildAnimation = !this.isDisabledChildAnimation;
  }

  disabledAllAnimation() {
    this.isAllAnimationDisabled = !this.isAllAnimationDisabled;
  }

  onLoadAnimationEvent( event: AnimationEvent ) { // почемуто тип не верен хоть и по докам
    console.log(event);
  }

  startLoadSimulation() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 3000);
  }

  onRunTestKeyframes() {
    this.keyframes = this.keyframes === 'active' ? 'inactive' : 'active';
  }

  changeActiveItem(item) {
    const newItem = this.arrayItems.map((x) => {
      x.checked = x.num === item.num;
      return x;
    });

    this.arrayItems = newItem;
  }
}
