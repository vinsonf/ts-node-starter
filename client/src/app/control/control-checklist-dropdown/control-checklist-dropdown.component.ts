import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-control-checklist-dropdown',
  templateUrl: './control-checklist-dropdown.component.html',
  styleUrls: ['./control-checklist-dropdown.component.scss']
})
export class ControlChecklistDropdownComponent implements OnInit {

  @Input() public label = '';
  @Input() public placeholder = '';
  @Input() public value = '';
  @Input() public form: FormGroup;
  @Input() public controlName = '';

  constructor() { }

  ngOnInit(): void {
  }

}
