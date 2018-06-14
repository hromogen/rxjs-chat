import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { ThreadsService } from './../thread/threads.service';

@Component({
  selector: 'chat-threads',
  template: `
    <div class="row">
      <div class="conversation-wrap">
        <chat-thread *ngFor="let thread of threads | async"
        [thread]="thread">
        </chat-thread>
      </div>
    </div>
  `,

})
export class ChatThreadsComponent implements OnInit {
  threads: Observable<any>;

  constructor(public threadsService: ThreadsService) {
    this.threads = threadsService.orderedThreads;
  }

  ngOnInit() {
  }

}
