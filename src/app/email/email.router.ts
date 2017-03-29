import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {EmailListingComponent} from "./email-listing/email-listing.component";

const routes: Route[] = [
  {
    path: '',
    component: EmailListingComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
