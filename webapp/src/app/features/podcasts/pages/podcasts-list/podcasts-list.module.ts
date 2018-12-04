import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodcastsListComponent } from './podcasts-list.component';
import { PodcastCardModule } from './components/podcast-card/podcast-card.module';
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from 'src/app/components/spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PodcastCardModule,
    SpinnerModule
  ],
  declarations: [PodcastsListComponent]
})
export class PodcastsListModule { }
