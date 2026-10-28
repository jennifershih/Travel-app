import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  inject,
} from '@angular/core';
import { TravelAppService } from '../../services/travel-app.service';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  standalone: false,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  private travelAppService = inject(TravelAppService);
  private northwindService = inject(NorthwindService);

  public travelAppSelectedArticles: any = null;
  public travelAppDestinations: any = null;
  public northwindProducts: any = null;
  public travelAppImageSet1: any = null;
  public travelAppImageSet2: any = null;

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.travelAppService
      .getData('Selected Articles')
      .subscribe((data) => (this.travelAppSelectedArticles = data));
    this.travelAppService
      .getData('Destinations')
      .subscribe((data) => (this.travelAppDestinations = data));
    this.travelAppService
      .getData('Image Set 1')
      .subscribe((data) => (this.travelAppImageSet1 = data));
    this.travelAppService
      .getData('Image Set 2')
      .subscribe((data) => (this.travelAppImageSet2 = data));
    this.northwindService
      .getData('Products')
      .subscribe((data) => (this.northwindProducts = data));
  }
}
