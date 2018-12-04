import { Component, OnInit } from '@angular/core';
import { Podcast } from '../../models/podcast';
import { PodcastsService } from '../../services/podcasts.service';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from '../../services/comments.service';
import { Comment } from '../../models/comment';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-podcast-detail',
  templateUrl: './podcast-detail.component.html',
  styleUrls: ['./podcast-detail.component.scss']
})
export class PodcastDetailComponent implements OnInit {

  public podcast: Podcast;
  public comments: Comment[] = [];
  public loading = true;
  public loadingComments = true;
  public sessionStatus: boolean;
  private id: number;

  constructor(
    private route: ActivatedRoute,
    private podcasts: PodcastsService,
    private commentsService: CommentsService,
    private auth: AuthService
  ) {
    this.sessionStatus = this.auth.isAuthenticated();
  }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: any) => {
        this.id = params.id;
        this.get();
      }
    );
  }

  public get() {
    this.podcasts.get(this.id).subscribe(
      (podcast: Podcast) => {
        this.podcast = podcast;
        this.loading = false;
        this.getComments();
      }
    );
  }

  public getComments() {
    this.commentsService.getAll(this.podcast).subscribe(
      (comments: Comment[]) => {
        this.comments = comments;
        this.loadingComments = false;
      }
    );
  }

  public addComment(comment: Comment) {
    this.comments.push(comment);
  }

  public doLike() {
    this.like();
    this.podcasts.like(this.podcast).subscribe(
      () => {},
      () => {
        this.unlike();
      }
    );
  }

  public doUnlike() {
    this.unlike();
    this.podcasts.unlike(this.podcast).subscribe(
      () => {},
      () => {
        this.like();
      }
    );
  }

  private like() {
    this.podcast.likes_amount++;
    this.podcast.likeme = true;
  }

  private unlike() {
    this.podcast.likes_amount--;
    this.podcast.likeme = false;
  }

}
