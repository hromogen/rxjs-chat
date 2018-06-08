import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs-compat';
import { Message } from './message.model';
import { Thread } from '../thread/thread.model';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  newMessages: Subject<Message> = new Subject<Message>();

  constructor() { }

  addMessage(message: Message): void {
      this.newMessages.next(message);
  };

  messagesForThreadUser = (thread: Thread, user: User): Observable<Message> => this.newMessages
  .filter((message: Message) => (
      message.thread.id === thread.id && message.author.id !== user.id
    ));
}
