import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { CommentsService } from 'src/app/features/podcasts/services/comments.service';
import { Comment } from 'src/app/features/podcasts/models/comment';
import { Podcast } from 'src/app/features/podcasts/models/podcast';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  @Output() public addComment: EventEmitter<Comment> = new EventEmitter<Comment>();
  @Input() public podcast: Podcast;
  public user = new User();
  public comment = new Comment();
  public sessionStatus: boolean;
  public addingComment = false;

  constructor(
    private auth: AuthService,
    private comments: CommentsService
  ) {
    this.observeSessionStatusChanges();
  }

  ngOnInit() {
    this.sessionStatus = this.auth.isAuthenticated();
    if (this.sessionStatus) {
      this.user.username = localStorage.username;
      this.user.id = localStorage.userId;
    }
  }

  public add() {
    this.addingComment = true;
    this.comment.user = this.user.id;
    this.comment.podcast = this.podcast.id;
    this.comments.create(this.comment).subscribe(
      (comment: Comment) => {
        this.addComment.emit(comment);
        this.comment = new Comment();
        this.addingComment = false;
      }
    );
  }

  private observeSessionStatusChanges() {
    this.auth.observeSessionStatusChanges().subscribe(
      (value: boolean) => this.sessionStatus = value
    );
  }

}
