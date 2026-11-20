import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { UserItem } from './app/user-item/user-item';
import { HelloWorld } from './app/hello-world/hello-world';
@Component({
  selector: 'app-root',
  imports: [UserItem, HelloWorld],
  template: `
  <h1>Welcome to {{ name }}!</h1>
  <app-hello-world></app-hello-world>
  <app-user-item></app-user-item> 
  <app-user-item></app-user-item>
  <app-user-item></app-user-item>

  `,
})
export class App {
  name = 'Angular';
  counter = signal(0);
}

bootstrapApplication(App);
