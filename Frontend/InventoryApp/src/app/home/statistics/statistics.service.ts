import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { IMyDateRangeModel } from 'mydaterangepicker';

@Injectable()
export class StatisticsService {
  dateRangeChanged: BehaviorSubject<IMyDateRangeModel> = new BehaviorSubject<IMyDateRangeModel>(null);
}
