import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';

import { EMAIL_LIST_GET, EMAIL_LIST_GET_SUCCESS, EMAIL_LIST_GET_FAIL } from './email.actions';
import { EmailService } from '../../email/email.service';

@Injectable()
export class EmailEffects {

  /*@Effect()
  init$ = this.actions$
    .ofType(EMAIL_LIST_GET)
    .mergeMap((action: Action) => {
      return Observable.concat(
        Observable.of(({ type: EMAIL_LIST_GET, payload: action.payload }))
      );
    });*/

  @Effect()
  emailListGet$ = this.actions$
    .ofType(EMAIL_LIST_GET)
    .switchMap((action: Action) => {

      return this.emailService.getEmailList(action.payload.page, action.payload.limit)
        .map((response: Response) => response.json())
        .map((response) => ({type: EMAIL_LIST_GET_SUCCESS, payload: response}))
        .catch(() => Observable.of(({ type: EMAIL_LIST_GET_FAIL })));

    });

  constructor(private actions$: Actions, private emailService: EmailService) {}
}
