import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-subscriber1',
  templateUrl: './subscriber1.component.html',
  styleUrls: ['./subscriber1.component.scss'],
})
export class Subscriber1Component implements OnInit {
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
