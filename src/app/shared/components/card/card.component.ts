import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, BadgeComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() badges: string[] = [];
}
