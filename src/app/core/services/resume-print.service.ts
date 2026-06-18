import { Injectable } from '@angular/core';

const PRINT_PATH = '/resume/print';

@Injectable({ providedIn: 'root' })
export class ResumePrintService {
  openPrintView(autoPrint = true): void {
    const url = autoPrint ? `${PRINT_PATH}?print=1` : PRINT_PATH;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
