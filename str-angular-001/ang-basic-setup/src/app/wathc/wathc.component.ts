import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wathc',
  templateUrl: './wathc.component.html',
  styleUrls: ['./wathc.component.scss']
})
export class WathcComponent implements OnInit {

  time: string = '';

  constructor() {
    setInterval(() => {
      const cDate = new Date();
      const time = [
        cDate.getHours(),
        cDate.getMinutes(),
        cDate.getSeconds(),
      ].map(part => part < 10 ? `0${part}` : part);
      this.time = `Time: ${time.join(':')}`;
    }, 1000);

  }

  ngOnInit(): void {
  }

}
