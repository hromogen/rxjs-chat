import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs-compat';

import { Thread } from './thread.model';
import { Message } from './../message/message.model';
import { MessagesService } from '../message/messages.service';

@Injectable({
  providedIn: 'root'
})
export class ThreadsService {
  threads: Observable<{[key: string]: Thread}>;
  orderedThreads: Subject<Thread[]> = new Subject<Thread[]>();
  currentThread: Subject<Thread> = new Subject<Thread>();
  currentThreadMessages: Subject<Message[]> = new Subject<Message[]>()

  constructor() {
    const messageService = new MessagesService();
    this.threads = messageService.messages.map((messages: Message[]) => {
      const threads = { [key: string]: Thread } = {}
    })
  }
}
