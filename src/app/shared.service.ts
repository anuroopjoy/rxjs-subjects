import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  sub$ = new Subject<string>();
  // sub$ = new BehaviorSubject<string>('default');
  // sub$ = new ReplaySubject<string>(3, 10000);
  // sub$ = new AsyncSubject<string>();
  constructor() {}
}
