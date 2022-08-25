import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, map } from 'rxjs/operators';

import { saveAs } from 'file-saver';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private url = `${environment.api_url}/files`;

  constructor(private http: HttpClient) { }

  uploadFile(file: Blob) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<{ originalname: string, filename: string, location: string }>
      (`${this.url}/upload`, formData, {
        // headers: { 'Content-Type': 'multipart/form-data' }
      });
  }

  getFile(name: string, url: string, type: string) {
    return this.http.get(url, { responseType: 'blob' })
      .pipe(
        tap(content => {
          const blob = new Blob([content], { type });
          saveAs(blob, name);
        }),
        map(() => true)
      );
  }
}
