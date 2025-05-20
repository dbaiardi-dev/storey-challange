import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';

export interface Supply {
  id: number;
  associatedSupply: string;
  address: string;
  locality: string;
  alias: string;
  nis: string;
  status: 'active' | 'inactive';
}

@Injectable({
  providedIn: 'root'
})
export class SupplyService {
  private apiUrl = 'http://localhost:3000/supplies';
  private supplies = signal<Supply[]>([]);
  private loading = signal<boolean>(false);

  constructor(private http: HttpClient) {}

  getSupplies(): Observable<Supply[]> {
    this.loading.set(true);
    return this.http.get<Supply[]>(this.apiUrl).pipe(
      tap(supplies => {
        this.supplies.set(supplies);
        this.loading.set(false);
      }),
      catchError(error => {
        this.loading.set(false);
        return of([]);
      })
    );
  }

  deleteSupply(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      map(() => {
        this.supplies.update(supplies => 
          supplies.filter(s => s.id !== id)
        );
      }),
      catchError(error => {
        throw error;
      })
    );
  }

  getSuppliesState() {
    return this.supplies.asReadonly();
  }

  getLoadingState() {
    return this.loading.asReadonly();
  }
} 