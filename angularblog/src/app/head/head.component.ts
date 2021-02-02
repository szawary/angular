import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  @Output() pageChange: EventEmitter<string> = new EventEmitter();
  currentUrl: string = "/"
  public constructor(private urlService: UrlService) {

  }

  ngOnInit(): void {
    this.urlService.pushUrl(this.currentUrl)
  }

  onLinkClick($event: Event) {
    $event.preventDefault();
    let elem = $event.target as HTMLLinkElement;
    let currentUrl = elem.getAttribute("href");

    this.urlService.pushUrl(this.currentUrl);
  }
}
