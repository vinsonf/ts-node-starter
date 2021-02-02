import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss']
})
export class SmartTableComponent implements OnInit {

  @Input() public data: any;
  public config = {
    headers: [
      { text: 'Name', style: 'width: 20%', field: 'name'},
      { text: 'Phone', style: 'width: 15%', field: 'phone'},
      { text: 'Email', style: 'width: 25%', field: 'email'},
      { text: 'Role Type', style: 'width: 30%', field: 'roleType'},
      { text: 'Actions', style: 'width: 10%'},
    ]
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }
  public styleRow(i: number) {
    return i % 2 === 0 ? 'users-table-row-text' : 'users-table-row-text-odd';
  }
}
