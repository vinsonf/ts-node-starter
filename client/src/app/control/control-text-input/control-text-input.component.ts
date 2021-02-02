import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-control-text-input',
  templateUrl: './control-text-input.component.html',
  styleUrls: ['./control-text-input.component.scss']
})
export class ControlTextInputComponent implements OnInit {
  @Input() public label: string;
  @Input() public controlName: string;
  @Input() public form: FormGroup;
  public validatorRequired = false;

  constructor() { }

  ngOnInit(): void {

    const temp = this.form?.get(this.controlName)?.validator
    if (temp) {
      const validator = temp({} as AbstractControl);
      console.log('temp', validator, this.controlName);
      this.validatorRequired = (validator && validator.required)
    }
  }


}
