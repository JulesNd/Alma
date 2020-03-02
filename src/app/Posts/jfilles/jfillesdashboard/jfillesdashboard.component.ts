import { Component, OnInit } from '@angular/core';
import {PostService} from '../../post.service';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-jfillesdashboard',
  templateUrl: './jfillesdashboard.component.html',
  styleUrls: ['./jfillesdashboard.component.css']
})
export class JfillesdashboardComponent implements OnInit {
  title: string;
  size: string;
  coverimage: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  constructor(private postService: PostService) { }

  ngOnInit() {

  }
  createPost() {
    const data = {
      title: this.title,
    size: this.size,
    coverimage: this.coverimage,
    color1: this.color1,
    color2: this.color2,
    color3: this.color3,
    color4: this.color4,
    };
    this.postService.createJFilles(data);
  }
  alert() {
    alert('Publié :D ! ');
  }

}
