import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../core/notification.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  constructor(
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  }

  showNotification() {
    this.notificationService.info('Some test info message!');
  }

}
