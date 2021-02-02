import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl('', ),
      password: new FormControl('', )
    });
  }

  public submit() {
    console.log('submit')
    this.authService.login(this.form.value).subscribe((data) => console.log(data))
  }

}
