import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularblog';

  @Output() pageChanged: EventEmitter<string> = new EventEmitter();

  onPageChange($event: any) {
    console.log($event);
    this.pageChanged.emit($event);
  }
}
