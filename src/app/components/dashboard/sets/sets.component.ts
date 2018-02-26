import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DashboardService} from '../../../services/dashboard.service';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.css']
})
export class SetsComponent implements OnInit, AfterViewInit {
  listSets: Array<any>;

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.listSets = [
      {photo: 'assets/img/155-con.jpg', name: 'GEL DÉRMICO DE ALOE VERA 250ml', price: '100.00$'},
      {photo: 'assets/img/cesta-vino.jpg', name: 'GEL DÉRMICO DE ALOE VERA 250ml', price: '101.00$'},
      {photo: 'assets/img/155-con.jpg', name: 'GEL DÉRMICO DE ALOE VERA 250ml', price: '102.00$'},
      {photo: 'assets/img/cesta-vino.jpg', name: 'GEL DÉRMICO DE ALOE VERA 250ml', price: '103.00$'},
      {photo: 'assets/img/155-con.jpg', name: 'GEL DÉRMICO DE ALOE VERA 250ml', price: '104.00$'},
      {photo: 'assets/img/cesta-vino.jpg', name: 'GEL DÉRMICO DE ALOE VERA 250ml', price: '105.00$'},
      {photo: 'assets/img/155-con.jpg', name: 'GEL DÉRMICO DE ALOE VERA 250ml', price: '106.00$'},
      {photo: 'assets/img/cesta-vino.jpg', name: 'GEL DÉRMICO DE ALOE VERA 250ml', price: '107.00$'}]
  }

  ngAfterViewInit(){
    this.dashboardService.runCarousel('sets-slider');
  }

}
