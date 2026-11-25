import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HelloWorld } from './app/hello-world/hello-world';
import { UserList } from './app/user-list/user-list';
@Component({
  selector: 'app-root',
  imports: [HelloWorld,UserList],
  template: `
  <h1>Welcome to {{ name }}!</h1>
  <app-hello-world></app-hello-world>
  <app-user-list></app-user-list>
  
  `,
})
export class App {
  name = 'Angular';
  counter = signal(0);
}

bootstrapApplication(App);
