import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../../services/dashboard.service';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.css']
})
export class BestsellersComponent implements OnInit {

  constructor(private dashboardService: DashboardService ) { }

  ngOnInit() {
    this.dashboardService.runCarousel('products-slider');
  }
}
