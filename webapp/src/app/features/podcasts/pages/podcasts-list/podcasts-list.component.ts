import { Component, OnInit } from '@angular/core';
import { Podcast } from '../../models/podcast';
import { PodcastsService } from '../../services/podcasts.service';
import {debounceTime, distinctUntilChanged} from 'rxjs/internal/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-podcasts-list',
  templateUrl: './podcasts-list.component.html',
  styleUrls: ['./podcasts-list.component.scss']
})
export class PodcastsListComponent implements OnInit {

  public podcasts: Podcast[] = [];
  public q = '';
  public loading = true;

  private thereAreMore = true;
  private offset = 0;
  private limit = 1;
  private fields = 'id,created,title,album,author,cover,song,likes_amount,likeme,year,youtube_url';
  private searchQueryChanged: Subject<string> = new Subject<string>();

  constructor(
    private podcastsService: PodcastsService
  ) {
    // Esperamos 1 segundo hasta que el usuario termine de ingresar el texto de busqueda
    this.searchQueryChanged
    .pipe(debounceTime(1000), distinctUntilChanged())
    .subscribe(() => {
      this.reset();
      this.filter();
     });
  }

  ngOnInit() {
    this.filter();
  }

  public search(value: string) {
    this.q = value;
    this.searchQueryChanged.next(value);
  }

  public filter() {
    this.loading = true;
    this.podcastsService.filter(this.q, this.fields, this.offset, this.limit)
    .subscribe(
      (data: any) => {
        this.podcasts = this.podcasts.concat(data.results);
        this.thereAreMore = data.results.length === this.limit;
        this.offset += this.limit;
        this.loading = false;
      }
    );
  }

  public onScroll() {
   if (!this.thereAreMore) {
    return;
   }
   this.filter();
  }

  private reset() {
    this.podcasts = [];
    this.offset = 0;
  }

}
