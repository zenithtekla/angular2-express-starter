import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-email-ui-listing',
  templateUrl: './email-ui-listing.component.html',
  styleUrls: ['./email-ui-listing.component.css']
})
export class EmailUiListingComponent implements OnInit {
  @Input() EmailList: Array<{}>;

  constructor() { }

  ngOnInit() {
    console.log(this.EmailList);
  }

}
