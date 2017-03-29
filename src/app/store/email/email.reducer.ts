import { Action, ActionReducer } from '@ngrx/store';
import { EMAIL_LIST_GET, EMAIL_LIST_GET_SUCCESS, EMAIL_LIST_GET_FAIL } from './email.actions';

export interface IEmail {
  EmailList?: Array<{}>;
  EmailListError: boolean;
  isFetching: false;
}

export const emailReducer: ActionReducer<IEmail> = (state: IEmail, action: Action): IEmail => {

  switch (action.type) {

    case EMAIL_LIST_GET:

      return Object.assign({}, state, {
        isFetching: true,
        EmailListError: false
      });

    case EMAIL_LIST_GET_SUCCESS:

      return Object.assign({}, state, {
        isFetching: false,
        EmailList: action.payload
      });

    case EMAIL_LIST_GET_FAIL:

      return Object.assign({}, state, {
        isFetching: false,
        EmailListError: true
      });

    default:
      return state;
  }
};
