import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

import {IAppState} from "../../store/index";
import { EMAIL_LIST_GET } from "../../store/email/email.actions";

@Component({
  selector: 'app-email-listing',
  templateUrl: './email-listing.component.html',
  styleUrls: ['./email-listing.component.css']
})
export class EmailListingComponent implements OnInit {
  form: FormGroup;
  email$: Observable<{}>;

  constructor(public fb: FormBuilder, public store: Store<IAppState>) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      'page': ['0', Validators.required],
      'limit': ['50', Validators.required]
    });
    this.email$ = this.store.select('email');
  }

  getEmailList(): void {

    this.store.dispatch({
      type: EMAIL_LIST_GET,
      payload: {
        page: this.form.get('page').value,
        limit: this.form.get('limit').value
      }
    });
  }
}
