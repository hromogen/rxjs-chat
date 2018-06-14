/*
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { messagesServiceInjectables } from './message/messages.service';
import { usersServiceInjectables } from './user/users.service';
import { threadsServiceInjectables } from './thread/threads.service';
import { fromNowPipeInjectables, FromNowPipe } from './pipes/from-now.pipe';

import { ChatNavBarComponent } from './chat-nav-bar/chat-nav-bar.component';
import { ChatThreadsComponent } from './chat-threads/chat-threads.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { ChatThreadComponent } from './chat-thread/chat-thread.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
*/
