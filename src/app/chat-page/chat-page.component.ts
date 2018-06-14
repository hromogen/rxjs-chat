import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-page',
  template: `
    <section>
      <chat-nav-bar></chat-nav-bar>
      <article class="container">
        <chat-threads></chat-threads>
        <chat-window></chat-window>
      </article>
    </section>
  `,
})
export class ChatPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
