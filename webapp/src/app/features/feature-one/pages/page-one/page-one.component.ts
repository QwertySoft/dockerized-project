import { Component, OnInit } from '@angular/core';
import { FeatureOneService } from '../../services/feature-one.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  constructor(service: FeatureOneService) { }

  ngOnInit() {
  }

}
