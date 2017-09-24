import { Component, OnInit } from '@angular/core';
// Services
import { RequestService } from '../core/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.requestService.loadCategories();
  }

}
