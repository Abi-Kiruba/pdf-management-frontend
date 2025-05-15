import { Component, OnInit } from '@angular/core';
import { PdfService } from '../services/pdf.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  pdfs: any[] = [];
  columns: string[] = ['user', 'pdfName', 'link'];

  constructor(private pdfService: PdfService) {}

  ngOnInit() {
    this.pdfService.getPdfs().subscribe((data) => {
      this.pdfs = data;
    });
  }
}
