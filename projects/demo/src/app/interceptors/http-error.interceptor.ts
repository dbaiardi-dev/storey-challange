import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GlobalErrorService } from '../services/global-error.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private globalErrorService: GlobalErrorService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 0) {
          this.globalErrorService.setError('No se pudo conectar al servidor. corra el comando json-server --watch db.json --port 3000');
        } else {
          this.globalErrorService.setError(`Error HTTP: ${error.status} - ${error.message}`);
        }
        return throwError(() => error);
      })
    );
  }
} 