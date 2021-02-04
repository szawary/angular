import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-data-row',
  templateUrl: './data-row.component.html',
  styleUrls: ['./data-row.component.scss']
})
export class DataRowComponent implements OnInit {
  @Input() dataRow: User = new User();
  @Output() selectClick: EventEmitter<User>;
  @Output() updateClick: EventEmitter<User>;
  @Output() deleteClick: EventEmitter<User>;

  onSelectButtonClick(): void {
    this.selectClick.emit(this.dataRow);
  };
  onUpdateClicked(): void {
    this.selectClick.emit(this.dataRow);
  }
  onDeleteClicked(): void {
    this.selectClick.emit(this.dataRow);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
