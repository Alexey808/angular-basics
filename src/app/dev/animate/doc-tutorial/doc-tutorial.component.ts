import { Component, HostBinding, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition, stagger, query,
} from '@angular/animations';

const baseAnimation = [
  state('open', style({
    height: '100px',
    opacity: 1,
    backgroundColor: '#eee'
  })),
  state('close', style({
    opacity: 1,
    backgroundColor: '#e8e8e8'
  })),
  transition('open => close', [
    animate('1s')
  ]),
  transition('close => open', [
    animate('0.5s')
  ]),
];

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
  // transition('* => start', [
  //   animate('3s')
  // ]),
  // transition('* => done', [
  //   animate('.5s')
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
  ]
})
export class DocTutorialComponent implements OnInit {
  ngIfBool = false;
  colorState = 'gray';
  array = [1, 2, 3, 4, 5];
  boolAnimation = false;
  isDisabledChildAnimation = false;
  isLoaded = false;

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

  onLoadAnimationEvent( event: AnimationEvent ) {
    console.log('!!!!', event);
    // openClose is trigger name in this example
    // phaseName is start or done
    // in our example, totalTime is 1000 or 1 second
    // in our example, fromState is either open or closed
    // in our example, toState either open or closed
    // the HTML element itself, the button in this case
  }

  startLoadSimulation() {
    this.isLoaded = false;
    setTimeout(() => {
      this.isLoaded = true;
    }, 3000);
  }
}
