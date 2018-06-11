import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs-compat';
import { Message } from './message.model';
import { Thread } from '../thread/thread.model';
import { User } from '../user/user.model';

interface IMessagesOperation extends Function {
  (messages: Message[]): Message[];
}

const initialMessages: Message[] = [];

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  newMessages: Subject<Message> = new Subject<Message>();
  messages: Observable<Message[]>;
  updates: Subject<any> = new Subject<any>();
  create: Subject<Message> = new Subject<Message>();
  markThreadAsRead: Subject<any> = new Subject<any>();

  constructor() {
    this.messages = this.updates.scan((messages: Message[],
    operation: IMessagesOperation) => operation(messages), initialMessages)
    .publishReplay(1)
    .refCount();

    this.create.map((message: Message): IMessagesOperation => 
    (messages: Message[]) => 
    messages.concat(message))
    .subscribe(this.updates);

    this.newMessages.subscribe(this.create);

    this.markThreadAsRead.map((thread: Thread) => (message: Message) => {
      if(message.thread.id === thread.id){
        message.isRead = true;
      }
      return message;
    }).subscribe(this.updates);
  };

  addMessage(message: Message): void {
      this.newMessages.next(message);
  };

  messagesForThreadUser = (thread: Thread, user: User): Observable<Message> => this.newMessages
  .filter((message: Message) => (
      message.thread.id === thread.id && message.author.id !== user.id
    ));
}

export const messagesServiceInjectables: Array<any> = [
  MessagesService
]
