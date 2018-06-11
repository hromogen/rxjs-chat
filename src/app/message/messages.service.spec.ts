import { TestBed, inject } from '@angular/core/testing';

import { MessagesService } from './messages.service';
import { Message } from './message.model';
import { Thread } from './../thread/thread.model';
import { User } from './../user/user.model';

describe('MessageService', () => {
  const user: User = new User('Nate', '');
  const thread: Thread = new Thread('t1', 'Nate', '');
  const m1: Message = new Message({
    author: user,
    text: 'Hi!',
    thread: thread,
  });

  const m2: Message = new Message({
    author: user,
    text: 'Bye!',
    thread: thread,
  });


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagesService]
    });
  });

  it('should be created', inject([MessagesService], (service: MessagesService) => {
    expect(service).toBeTruthy();
  }));

  it('should be able to add a message to the stream', 
  (inject([MessagesService], (service: MessagesService) => {
    service.addMessage(m1);
    service.newMessages.subscribe((message: Message) => {
      expect(message).toEqual(m1);
    });
    service.messages.subscribe((messages: Message[]) => {
      expect(messages).toEqual([m1]);
    });
  })));
  it('should be able to add multiple messages to the stream',
  (inject([MessagesService], (service: MessagesService) => {
    service.addMessage(m1);
    service.addMessage(m2);
    service.newMessages.subscribe((message: Message) => {
      expect(message).toEqual(m2);
    });
    service.messages.subscribe((messages: Message[]) => {
      expect(messages).toEqual([m1, m2]);
    });
  })));
  
});
