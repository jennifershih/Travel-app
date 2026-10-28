import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-in-app',
  templateUrl: './in-app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./in-app.component.scss'],
})
export class InAppComponent {}
