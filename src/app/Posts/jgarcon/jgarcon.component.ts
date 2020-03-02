import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {JGarcon} from './JGarcon';
import {PostService} from '../post.service';
import {AuthService} from '../../Services/auth.service';

@Component({
  selector: 'app-jgarcon',
  templateUrl: './jgarcon.component.html',
  styleUrls: ['./jgarcon.component.css']
})
export class JGarconComponent implements OnInit {
password: string;
user: firebase.User;
ArticleJGarcons: Observable<JGarcon[]>;
  constructor(private postService: PostService, private auth: AuthService ) { }

  ngOnInit() {
    this.ArticleJGarcons = this.postService.getJGarcon();
    this.auth.getUserState().subscribe(user =>{this.user = user; });
    this.auth.eventAuthError$.subscribe(data =>{
      console.log(this);
    });
  }
delete(id: string) {
    this.postService.deleteJGarcon(id);
}
}
