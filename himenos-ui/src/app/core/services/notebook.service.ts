import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotebookService {
  private baseUrl = '/api/notebooks';

  constructor(private http: HttpClient) { }

  saveFile(filename: string, content: string): Observable<any> {
    const blob = new Blob([content], { type: 'text/html' });
    const formData = new FormData();
    formData.append('file', blob, filename);

    return this.http.post(`${this.baseUrl}/upload`, formData);
  }

  loadFile(filename: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/download/${filename}`, { responseType: 'text' });
  }
}
