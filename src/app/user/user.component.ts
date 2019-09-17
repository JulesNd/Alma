import {Component, Input, OnInit} from '@angular/core';
import {PresenceService} from '../Services/presence.service';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() uid;
  presence$;
  private presence: any;

  constructor() { }

  ngOnInit() {
    this.presence$ = this.presence.getPresence(this.uid);
  }

}
