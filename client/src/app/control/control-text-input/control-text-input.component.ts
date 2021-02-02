import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-control-text-input',
  templateUrl: './control-text-input.component.html',
  styleUrls: ['./control-text-input.component.scss']
})
export class ControlTextInputComponent implements OnInit {
  @Input() public label: string;
  @Input() public controlName: string;
  @Input() public form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
