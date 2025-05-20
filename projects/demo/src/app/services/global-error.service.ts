import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GlobalErrorService {
  private error = signal<string | null>(null);

  setError(message: string) {
    this.error.set(message);
  }

  clearError() {
    this.error.set(null);
  }

  getError() {
    return this.error.asReadonly();
  }
} 