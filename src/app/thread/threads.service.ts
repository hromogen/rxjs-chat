import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { map, combineLatest } from 'rxjs/operators';
import { Thread } from './thread.model';
import { Message } from './../message/message.model';
import { MessagesService } from '../message/messages.service';

@Injectable({
  providedIn: 'root'
})
export class ThreadsService {
  // `threads` is an observable that contains the most up to date  list of threads
  threads: Observable<{[key: string]: Thread}>;
  // `orderedThreads` contains a newest-first chronological list of threads
  orderedThreads: Observable<Thread[]>;
  // `currentThread` contains the currently selected thread
  currentThread: Subject<Thread> = new BehaviorSubject<Thread>(new Thread());
  // `currentThreadMessages` contains the set of messages for the currently selected thread
  currentThreadMessages: Observable<Message[]> = new Observable<Message[]>()

  constructor(public messagesService: MessagesService) {
    this.threads = messagesService.messages.pipe(
      map( 
        (messages: Message[]) => messages.reduce((threads: { [key: string]: Thread }, message: Message) => {
          const { id } = message.thread;
          threads[id] = threads[id] || message.thread;
          const messagesThread: Thread = threads[id];
          if (!messagesThread.lastMessage ||
            messagesThread.lastMessage.sentAt < message.sentAt) {
              messagesThread.lastMessage = message;
            }
          return threads;
        }, {})
      )
    );

    this.orderedThreads = this.threads.pipe(
      map((threadGroups: {[key: string]: Thread}) => {
        const threads: Thread[] = Object.values(threadGroups);
        return threads.sort((tA:Thread, tB: Thread) => (tA.lastMessage.sentAt.getTime() - tB.lastMessage.sentAt.getTime()))
      })
    );

    this.currentThread.subscribe(this.messagesService.markThreadAsRead);

    this.currentThreadMessages = this.currentThread.pipe(
      combineLatest(messagesService.messages, 
        (currentThread: Thread, messages: Message[]) => (currentThread && messages.length > 0) 
          ?
            messages.filter((m: Message) => (m.thread.id === currentThread.id))
            .map((m: Message) => {
                m.isRead = true;
                return m;
            }) 
          : 
          []
        )
      );
  };

  setCurrentThread(newThread: Thread): void {
    this.currentThread.next(newThread);
  };
};

export const threadsServiceInjectables: Array<any> = [
  ThreadsService
];
