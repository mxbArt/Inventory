import { Component, OnInit } from '@angular/core';
// Services
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  username: string;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.username = this.profileService.getUserName();
  }

}
