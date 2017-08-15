import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Injectable()
export class NotificationService {
  useDefaultTitles: boolean;

  constructor(private toastrService: ToastrService) {
    this.useDefaultTitles = true;
  }

  info(message: string, title?: string) {
    if (this.useDefaultTitles && title === undefined) {
      title = 'Information';
    }
    this.toastrService.info(message, title);
  }

  success(message: string, title?: string) {
    if (this.useDefaultTitles && title === undefined) {
      title = 'Success';
    }
    this.toastrService.success(message, title);
  }

  error(message: string, title?: string) {
    if (this.useDefaultTitles && title === undefined) {
      title = 'Error';
    }
    this.toastrService.error(message, title);
  }

  warning(message: string, title?: string) {
    if (this.useDefaultTitles && title === undefined) {
      title = 'Warning';
    }
    this.toastrService.warning(message, title);
  }

}
