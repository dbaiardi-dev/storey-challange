import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({ name: 'highlight' })
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(text: string, search: string): SafeHtml {
    if (!search || !text) return text;
    const pattern = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`(${pattern})`, 'gi');
    const result = text.replace(regex, '<mark style="height: 100%; background-color: #FCED43; color: #000; padding: 0 2px; border-radius: 2px;">$1</mark>');
    return this.sanitizer.bypassSecurityTrustHtml(result);
  }
} 