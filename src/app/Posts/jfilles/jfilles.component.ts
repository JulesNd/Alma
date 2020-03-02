import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {JFilles} from './JFilles';
import {PostService} from '../post.service';
import {AuthService} from '../../Services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-jfilles',
  templateUrl: './jfilles.component.html',
  styleUrls: ['./jfilles.component.css']
})
export class JfillesComponent implements OnInit {
  ArticleJf: Observable<JFilles[]>;
  email: string;
  password: string;
  user: firebase.User;

  constructor(private postService: PostService, private auth: AuthService) { }

  ngOnInit() {
    this.ArticleJf = this.postService.getJFilles();
    this.auth.getUserState().subscribe(user => {this.user = user; });
    this.auth.eventAuthError$.subscribe(data => {
      console.log(this);
    });
  }
  deleteJfilles(id: string) {
    this.postService.deleteJFilles(id);
  }

}
