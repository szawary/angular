import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
@Input() dataList: User[] = [];
@Output() selectClick: EventEmitter<User> = new EventEmitter();
@Output() updateClick: EventEmitter<User> = new EventEmitter();
@Output() deleteClick: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

onSelectClicked(dataRow: User): void{
  this.selectClick.emit(dataRow);
}
onUpdateClicked(dataRow: User): void{
  this.updateClick.emit(dataRow);
}
onDeleteClicked(dataRow: User): void{
  this.deleteClick.emit(dataRow);
}



}
