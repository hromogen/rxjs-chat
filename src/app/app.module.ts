import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { messagesServiceInjectables } from './message/messages.service';
import { usersServiceInjectables } from './user/users.service';
import { threadsServiceInjectables } from './thread/threads.service';
import { fromNowPipeInjectables, FromNowPipe } from './pipes/from-now.pipe';

import { AppComponent } from './app.component';
import { ChatNavBarComponent } from './chat-nav-bar/chat-nav-bar.component';
import { ChatThreadsComponent } from './chat-threads/chat-threads.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { ChatThreadComponent } from './chat-thread/chat-thread.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatNavBarComponent,
    ChatThreadsComponent,
    ChatWindowComponent,
    ChatPageComponent,
    ChatThreadComponent,
    ChatMessageComponent, 
    FromNowPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    messagesServiceInjectables,
    usersServiceInjectables,
    threadsServiceInjectables,
    fromNowPipeInjectables,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
