import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  template: `
    <header class="section-header">
      <h2>{{ title }}</h2>
      @if (subtitle) {
        <p>{{ subtitle }}</p>
      }
    </header>
  `,
  styleUrl: './section-header.component.scss',
})
export class SectionHeaderComponent {
  @Input({ required: true }) title!: string;
  @Input() subtitle = '';
}
