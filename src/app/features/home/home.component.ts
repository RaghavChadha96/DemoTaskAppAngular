import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post-model';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts: Post[];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getPosts().subscribe((value) => {
      this.posts = [...value];
    });
  }

}
