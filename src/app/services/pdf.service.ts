import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private baseUrl = 'http://localhost:5000/api'; 

  constructor(private http: HttpClient) {}

  uploadPdf(formData: FormData) {
    return this.http.post(`${this.baseUrl}/upload`, formData);
  }

  getPdfs() {
    return this.http.get<any[]>(`${this.baseUrl}/pdfs`);
  }
}
