import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ApiService} from "../../services/api.service";
import {ApiGetRoleTypesRequests} from "../../services/endpoints/api.get.roletypes.requests";
import {Observable} from "rxjs";

@Component({
  selector: 'app-control-role-type-selector',
  templateUrl: './control-role-type-selector.component.html',
  styleUrls: ['./control-role-type-selector.component.scss']
})
export class ControlRoleTypeSelectorComponent implements OnInit {
  @Input() public form: FormGroup;
  @Input() public controlName: string;
  roleTypes$: Observable<any>

  constructor(
    private apiService: ApiService,

  ) { }

  ngOnInit(): void {
    this.roleTypes$ = this.apiService.request(
      new ApiGetRoleTypesRequests()
    )
  }

}
