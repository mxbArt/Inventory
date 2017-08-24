import { Component, OnInit } from '@angular/core';
// Enums
import { Roles } from '../../core/enums/roles.enum';
// Services
import { AuthService } from '../../authentication/auth.service';
import { ProfileService } from '../common/profile/profile.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  username: string;
  role: Roles;

  constructor(private profileService: ProfileService, private authService: AuthService) { }

  ngOnInit() {
    this.username = this.profileService.getUserName();
    this.role = this.authService.authData.role;
  }

}
