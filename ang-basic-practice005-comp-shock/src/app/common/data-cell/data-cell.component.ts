import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-data-cell',
  templateUrl: './data-cell.component.html',
  styleUrls: ['./data-cell.component.scss']
})
export class DataCellComponent implements OnInit {
  @Input() data: User = new User();
  @Input() key: string = '';
@Output() dataChanged: EventEmitter<string | boolean | number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeValue(event: Event):void{
    const currentValue=(event.target as HTMLInputElement).value;
    this.dataChanged.emit(currentValue);
  }
}
