import { Component, OnInit, Input } from '@angular/core';

import { UsersService } from './../user/users.service';

import { Message } from './../message/message.model';
import { User } from './../user/user.model';
import { FromNowPipe } from './../pipes/from-now.pipe';

@Component({
  selector: 'chat-message',
  templateUrl: './chat-message.component.html',
})
export class ChatMessageComponent implements OnInit {
  @Input() message: Message;
  currentUser: User;
  incoming: boolean;

  constructor(public usersService: UsersService,
    public fromNow: FromNowPipe 
  ) { }

  ngOnInit(): void {
    this.usersService.currentUser.subscribe(
      (user: User) => {
        this.currentUser = user;
        if(this.message.author && user){
          this.incoming = this.message.author.id !== user.id
        }
      });
  }

}
