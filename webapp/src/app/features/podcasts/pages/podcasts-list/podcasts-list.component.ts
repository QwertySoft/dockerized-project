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

  private offset = 0;
  private limit = 20;
  private fields = 'id,created,title,album,author,cover,song,likes_amount,likeme';
  private searchQueryChanged: Subject<string> = new Subject<string>();

  constructor(
    private podcastsService: PodcastsService
  ) {
    // Esperamos 1 segundo hasta que el usuario termine de ingresar el texto de busqueda
    this.searchQueryChanged
    .pipe(debounceTime(1000), distinctUntilChanged())
    .subscribe(() => {
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
    this.podcastsService.filter(this.q, this.fields, this.offset, this.limit)
    .subscribe(
      (podcasts: Podcast[]) => {
        this.podcasts = podcasts;
        this.loading = false;
      }
    );
  }

  // TODO: infinite scroll


}
