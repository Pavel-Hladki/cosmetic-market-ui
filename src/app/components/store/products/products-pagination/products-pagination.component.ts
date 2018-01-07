import { Component, OnInit } from '@angular/core';
import {PaginationService} from "../../../../services/pagination.service";

@Component({
  selector: 'app-products-pagination',
  templateUrl: './products-pagination.component.html',
  styleUrls: ['./products-pagination.component.css'],
  providers:[PaginationService],
})
export class PaginationComponent implements OnInit {

  constructor(private paginationService: PaginationService) { }

  ngOnInit() {
  }



}
