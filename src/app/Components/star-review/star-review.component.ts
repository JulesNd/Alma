import {Component, Input, OnInit} from '@angular/core';
import {StarService} from '../../Services/star.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-star-review',
  templateUrl: './star-review.component.html',
  styleUrls: ['./star-review.component.css']
})
export class StarReviewComponent implements OnInit {
@Input() userId;
@Input() photoId;
stars: Observable<any>;
avgRating: Observable<any>;
  constructor(private starService: StarService) { }

  ngOnInit() {
    this.stars = this.starService.getphotoStars(this.photoId);
    this.avgRating = this.stars.map(arr => {
      const ratings = arr.map(v => v.value);
      return ratings.length ? ratings.reduce((total, val) => total + val) / arr.length : 'not reviewed';
    });
  }
  starHandler(value) {
    this.starService.setStar(this.userId, this.photoId, value);

  }


}
