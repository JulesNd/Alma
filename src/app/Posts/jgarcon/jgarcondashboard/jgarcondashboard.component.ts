import { Component, OnInit } from '@angular/core';
import {PostService} from '../../post.service';

@Component({
  selector: 'app-jgarcondashboard',
  templateUrl: './jgarcondashboard.component.html',
  styleUrls: ['./jgarcondashboard.component.css']
})
export class JgarcondashboardComponent implements OnInit {
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
    this.postService.createJGarcon(data);
  }
  alert() {
    alert('Publié :D ! ');
  }

}
