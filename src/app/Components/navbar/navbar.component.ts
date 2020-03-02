import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Services/auth.service';
import {Router} from '@angular/router';
import {$} from 'protractor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:only-arrow-functions


  }

}
