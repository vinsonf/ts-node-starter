import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {ApiPostUsers} from "../../services/endpoints/users.requests";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-page-users',
  templateUrl: './page-users.component.html',
  styleUrls: ['./page-users.component.scss']
})
export class PageUsersComponent implements OnInit {

  public users: any;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log( this.route.snapshot.data.title);
    this.users = this.apiService.request(
      new ApiPostUsers(null)
    );
    console.log('these are the users', this.users)

  }

}
