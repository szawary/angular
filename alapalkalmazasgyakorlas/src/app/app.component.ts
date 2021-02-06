import { Component } from '@angular/core';
import { Users } from './model/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alapalkalmazasgyakorlas';

  // felveszem a változót, típusát a model / users classba 
  // szervzetem ki. Objektumok tömbje
  users: Users[] = [
    {
      id: '1es személy',
      name: 'Laszlo',
      email: 'laszlo@gmail.com',
    },
    {
      id: 2,
      name: 'Sandor',
      email: 'sandor@gmail.com',
    },
    {
      id: 3,
      name: 'Peter',
      email: 'peter@gmail.com'
    },

  ];



}
