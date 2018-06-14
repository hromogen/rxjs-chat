import { Component, Inject, OnInit } from '@angular/core';
import { ThreadsService } from './../thread/threads.service';
import { MessagesService } from './../message/messages.service';
import { combineLatest } from 'rxjs/operators';

import { Thread } from './../thread/thread.model';
import { Message } from './../message/message.model';


@Component({
  selector: 'chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
})
export class ChatNavBarComponent implements OnInit {
  unreadMessagesCount: number;

  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService) { }

  ngOnInit(): void {
    this.messagesService.messages.pipe(
      combineLatest(this.threadsService.currentThread,
      (messages: Message[], currentThread: Thread) => [currentThread, messages])
    ).subscribe(([currentThread, messages]: [Thread, Message[]]) => {
      this.unreadMessagesCount = messages.reduce((interim: number, m: Message) => {
        const messageInCurrentThread = m.thread && currentThread && (currentThread.id === m.thread.id);
        return interim += Number(m && !m.isRead && !messageInCurrentThread);
      }, 0);
    });
  }
}
