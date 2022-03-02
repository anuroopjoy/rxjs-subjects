import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-subscriber2',
  templateUrl: './subscriber2.component.html',
  styleUrls: ['./subscriber2.component.scss'],
})
export class Subscriber2Component implements OnInit {
  receivedData: string[] = [];
  receivedError: string[] = [];
  subscription!: Subscription | null;
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.subscribe();
  }

  subscribe() {
    if (!this.subscription) {
      this.subscription = this.sharedService.sub$.subscribe({
        next: (message) => {
          this.receivedData.push(message);
        },
        error: (error) => {
          this.receivedError.push(error);
        },
      });
    }
  }

  unsubscribe() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
      this.receivedData = [];
      this.receivedError = [];
    }
  }
}
