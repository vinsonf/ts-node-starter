import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-control-form-action-button',
  templateUrl: './control-form-action-button.component.html',
  styleUrls: ['./control-form-action-button.component.scss']
})
export class ControlFormActionButtonComponent implements OnInit {
  @Input() public label: string;
  @Output() private submitEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public submit() {
    this.submitEmitter.emit();
  }

}
