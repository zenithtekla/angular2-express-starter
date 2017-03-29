import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailListingComponent } from './email-listing/email-listing.component';
import { routing } from './email.router';
import {SharedModule} from "../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EmailListingComponent],
  bootstrap: [EmailListingComponent]
})
export class EmailModule { }
