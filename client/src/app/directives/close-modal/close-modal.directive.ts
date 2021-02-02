import {Directive, HostListener, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {IStoreState} from '@store/index';
import * as ModalActions from '@store/actions/modal.actions';

@Directive({
  selector: '[appCloseModal]'
})
export class CloseModalDirective  {
  @Input() appCloseModal: string;
  @HostListener('click', ['$event.target'])
  public onClick(btn) {
    this.closeDialog(this.appCloseModal);
  }
  constructor(
    private store: Store<IStoreState>,
  ) { }
  public closeDialog(id) {
    this.store.dispatch(ModalActions.ActionCloseModal({id}));
  }
}
