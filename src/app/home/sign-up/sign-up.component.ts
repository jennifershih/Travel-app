import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {}
