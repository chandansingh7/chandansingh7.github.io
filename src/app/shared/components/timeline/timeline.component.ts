import { Component, Input } from '@angular/core';

import { Experience } from '../../../core/models/experience.model';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  @Input({ required: true }) items: Experience[] = [];
}
