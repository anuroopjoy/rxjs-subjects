import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'rxjs-subjects';
  data!: string;
  time!: string;

  constructor(private sharedService: SharedService) {}
  ngOnInit(): void {
    this.#startTime();
  }

  sendToSubs() {
    this.sharedService.sub$.next(this.data);
  }
  sendError() {
    this.sharedService.sub$.error('error');
  }
  completeStream() {
    this.sharedService.sub$.complete();
  }

  #startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = this.#checkTime(m);
    s = this.#checkTime(s);
    this.time = h + ':' + m + ':' + s;
    setTimeout(this.#startTime.bind(this), 1000);
  }

  #checkTime(i: any) {
    if (i < 10) {
      i = '0' + i;
    } // add zero in front of numbers < 10
    return i;
  }
}
