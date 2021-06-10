import { ComicsApiService } from './comic/shared/comics-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private comicSvc: ComicsApiService) { }
  allComics: Observable<any>

  ngOnInit() {
    this.getComics();
  }

  getComics() {
    this.allComics = this.comicSvc.getAllComics();
  }

}
