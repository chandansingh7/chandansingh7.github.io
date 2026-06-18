import { Component, Input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [MatChipsModule],
  template: `<mat-chip-set aria-label="Tags"><mat-chip>{{ label }}</mat-chip></mat-chip-set>`,
  styles: `
    :host {
      display: inline-block;
    }
    mat-chip-set {
      margin: 0;
    }
  `,
})
export class BadgeComponent {
  @Input({ required: true }) label!: string;
}
