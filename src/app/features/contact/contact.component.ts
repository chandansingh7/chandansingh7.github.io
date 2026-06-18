import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { DataService } from '../../core/services/data.service';
import { SeoService } from '../../core/services/seo.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { emailValidator, minLengthTrimmed } from './contact.validators';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    SectionHeaderComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  private readonly data = inject(DataService);
  private readonly seo = inject(SeoService);
  private readonly fb = inject(FormBuilder);

  readonly profile$ = this.data.getProfile();
  submitted = false;

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, minLengthTrimmed(2)]],
    email: ['', [Validators.required, emailValidator]],
    subject: ['', [Validators.required, minLengthTrimmed(3)]],
    message: ['', [Validators.required, minLengthTrimmed(10)]],
  });

  ngOnInit(): void {
    this.seo.setPage('Contact', 'Contact Chandan Singh.');
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, subject, message } = this.form.getRawValue();
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    window.location.href = `mailto:chandan.singh558@hotmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    this.submitted = true;
  }
}
