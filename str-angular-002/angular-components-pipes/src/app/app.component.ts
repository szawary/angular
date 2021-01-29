import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Data Binding Example';
  subtitle = 'Ez egy Subtitle';

  btnDisabled: boolean = false;

  users: User[] = [
    new User(1, 'Kis Pista', 'jani@gmail.com'),
    new User(2, 'Nagy Lajos', 'bigyo@gmail.com'),
    new User(3, 'Gáspár Olga', 'feri@gmail.com')
  ]

  onSwitchDisable(): void {
    this.btnDisabled = !this.btnDisabled;
  }
  onAlert(): void {
    alert('Szia, én vagyok az alert. :-)');
  }

  onDeleteUser(user: User): void {
    let index = 0;
    for (let i = 0; i < this.users.length; i++) {
      if (user.id === this.users[i].id) {
        index = i;
      }
    }
    this.users.splice(index, 1);
  }
}

