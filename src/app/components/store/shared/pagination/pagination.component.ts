import { Component, OnInit } from '@angular/core';
import {PaginationService} from "../../../../services/pagination.service";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  providers:[ PaginationService ],
})
export class PaginationComponent implements OnInit {

  constructor(private paginationService: PaginationService) { }

  ngOnInit() {
  }



}
