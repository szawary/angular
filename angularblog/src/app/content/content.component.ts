import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { HeadComponent } from '../head/head.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  currentPage: string = "/";
  @Input() onPageChanged: EventEmitter<string> | undefined;

  constructor() { }

  ngOnInit(): void {
    this.onPageChanged.subscribe(
      ($event: any) => {
        console.log($event);
      }
    )
  }

}
