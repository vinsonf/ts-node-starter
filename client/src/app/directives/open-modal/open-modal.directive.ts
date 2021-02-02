import {Directive, HostListener, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {IStoreState} from '@store/index';
import * as ModalActions from '@store/actions/modal.actions';

@Directive({
  selector: '[appOpenModal]'
})
export class OpenModalDirective {
  @Input()
  appOpenModal: string;
  @HostListener('click', ['$event.target'])
  onClick(btn) {
    this.showDialog(this.appOpenModal);
  }

  constructor(
    private store: Store<IStoreState>,
  ) { }
  showDialog(id){
    this.store.dispatch(ModalActions.ActionOpenModal({id}));
  }
}
